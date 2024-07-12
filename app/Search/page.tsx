"use client";

import CardImg from "../(components)/CardImg";
import Nav from "../(components)/Nav";
import * as Scry from "scryfall-sdk";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "../(components)/Pagination";

const Search = () => {
  const searchParams = useSearchParams();
  const searchName = searchParams.get("name");

  const [cardPages, setCardPages] = useState<[Scry.Card[]]>([[]]);
  const [paginationLength, setPaginationLength] = useState(1);
  const [paginationIndex, setPaginationIndex] = useState(1);

  useEffect(() => {
    const findCards = async () => {
      const cardArr: [Scry.Card[]] = [[]];

      if (typeof searchName === "string") {
        await Scry.Cards.search(searchName)
          .on("data", (card) => {
            if (cardArr[cardArr.length - 1].length < 10) {
              cardArr[cardArr.length - 1].push(card);
            } else {
              cardArr.push([card]);
            }
          })
          .on("end", () => {
            setPaginationLength(cardArr.length);
            setCardPages(cardArr);
            console.log("Feito");
          });
      }
    };

    findCards();
  }, [searchName]);

  return (
    <>
      <Nav searchbar={true} value={searchName || undefined} />

      {/* Renderização das cartas (10 por página) */}
      <div className="flex flex-grow flex-wrap mt-8 mx-80 gap-8 justify-center h-auto max-[870px]:mx-16 max-[300px]:mx-10">
        {cardPages[paginationIndex - 1].map((card) => (
          <CardImg
            cardImgSrc={
              card.getImageURI("normal") || card.getBackImageURI("normal")
            }
            cardName={card.name}
            cardUrl={``}
            key={cardPages[paginationIndex - 1].indexOf(card)}
          />
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

export default Search;
