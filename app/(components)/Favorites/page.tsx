"use client";

import { useEffect, useState } from "react";
import Nav from "../Nav";
import * as Scry from "scryfall-sdk";
import Pagination from "../Pagination";
import CardImg from "../CardImg";

const Favorites = () => {
  const [cardPages, setCardPages] = useState<[Scry.Card[]]>([[]]);
  const [paginationLength, setPaginationLength] = useState(1);
  const [paginationIndex, setPaginationIndex] = useState(1);

  // Hook com finalidade de renderizar na tela lista de favoritos do local storage através do metodo getFavorite
  useEffect(() => {
    const data = window.localStorage.getItem("favoriteCards");

    if (data) {
      const favArr: string[] = JSON.parse(data);
      const newCardArr: [Scry.Card[]] = [[]];

      favArr.forEach(async (id) => {
        const card = await Scry.Cards.byId(id);

        if (newCardArr[newCardArr.length - 1].length <= 10) {
          newCardArr[newCardArr.length - 1].push(card);
        } else {
          newCardArr.push([card]);
          setPaginationLength(newCardArr.length + 1);
        }
      });

      console.log(newCardArr);
      setCardPages(newCardArr);
    }
  }, []);

  return (
    <>
      <Nav searchbar />
      <h2 className="text-center mt-8">Favoritos:</h2>
      <div className="flex flex-grow flex-wrap mt-8 mx-80 gap-8 justify-center h-auto max-[870px]:mx-16 max-[300px]:mx-10">
        {cardPages[paginationIndex - 1].map((card) => (
          <div
            className="flex flex-col justify-center items-center"
            key={cardPages[paginationIndex - 1].indexOf(card)}
          >
            <CardImg
              cardImgSrc={
                card.getImageURI("normal") || card.getBackImageURI("normal")
              }
              cardName={card.name}
              cardUrl={`/Card/${card.id}`}
            />
          </div>
        ))}
      </div>

      {/* Paginação para renderização das cartas */}
      <Pagination
        paginationIndex={paginationIndex}
        setPaginationIndex={setPaginationIndex}
        paginationLength={paginationLength}
      />
    </>
  );
};

export default Favorites;
