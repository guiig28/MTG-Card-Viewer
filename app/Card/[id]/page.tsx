"use client";

import FavoriteIcon from "@/app/(components)/(icons)/FavoriteIcon";
import CardImg from "@/app/(components)/CardImg";
import Loading from "@/app/(components)/Loading";
import Nav from "@/app/(components)/Nav";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as Scry from "scryfall-sdk";

const Card = () => {
  const params = useParams();
  const cardId = params.id;

  const [card, setCard] = useState<Scry.Card | undefined>(undefined);
  const [favorited, setFavorited] = useState(false);
  const [favoritedList, setFavoritedList] = useState<string[]>([]);
  const [loadingIsOpen, setLoadingIsOpen] = useState(true);

  setTimeout(() => setLoadingIsOpen(false), 6 * 1000);

  const handleFavorite = () => {
    if (typeof cardId === "string") {
      if (favorited) {
        const newArr = favoritedList;
        newArr.splice(newArr.indexOf(cardId), 1);

        window.localStorage.removeItem("favoriteCards");
        window.localStorage.setItem("favoriteCards", JSON.stringify(newArr));
        setFavoritedList(newArr);
        setFavorited(false);
      } else {
        const newArr = [...favoritedList, cardId];

        window.localStorage.removeItem("favoriteCards");
        window.localStorage.setItem("favoriteCards", JSON.stringify(newArr));
        setFavoritedList(newArr);
        setFavorited(true);
      }
    }
  };

  useEffect(() => {
    const getCard = async () => {
      if (typeof cardId === "string") {
        const card = await Scry.Cards.byId(cardId);

        setCard(card);
      }
    };

    getCard();

    const data = window.localStorage.getItem("favoriteCards");

    if (data) {
      const cardArr: string[] = JSON.parse(data);
      setFavoritedList(cardArr);

      if (typeof cardId === "string" && cardArr.includes(cardId)) {
        setFavorited(true);
      }
    }
  }, [cardId]);

  if (!card) {
    return (
      <>
        <Nav searchbar />
        <div className="flex grow justify-center items-center text-center">
          {loadingIsOpen ? <Loading /> : <h2>Erro ao carregar Card.</h2>}
        </div>
      </>
    );
  }

  return (
    <>
      <Nav searchbar />
      <div className="flex grow my-8 mx-80 justify-center h-auto max-[1300px]:mx-20 max-[800px]:mx-10 max-[690px]:flex-wrap max-[690px]:my-4">
        <div className="flex flex-col items-center pt-4 px-12 max-[1300px]:px-4 max-[690px]:h-fit">
          <CardImg
            cardImgSrc={
              card.getImageURI("normal") || card.getBackImageURI("normal")
            }
            cardName={card.name}
          />
          <button
            className={`flex items-center justify-center gap-x-2 mt-4 w-36 h-10 text-lg border-2 rounded-lg border-gray-800 hover:border-gray-400 ${
              favorited
                ? "text-yellow-400 hover:text-red-600"
                : "text-gray-800 hover:text-yellow-400"
            }`}
            onClick={handleFavorite}
          >
            <FavoriteIcon backgroundYellow={favorited} />
            {favorited ? "Favoritado" : "Favoritar"}
          </button>
        </div>
        <div className="flex grow flex-col py-4 px-12  border-l border-gray-800 max-[690px]:border-0 max-[500px]:px-4">
          <h1>{card.name}</h1>
          <h3 className="mt-2">{card.getCost()}</h3>
          <h3 className="mt-2">{card.type_line}</h3>
          <p className="mt-4">{card.oracle_text}</p>
          <p className="mt-4 italic">{card.flavor_text}</p>
          {card.toughness ? (
            <h3 className="mt-4">{`${card.power}/${card.toughness}`}</h3>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
