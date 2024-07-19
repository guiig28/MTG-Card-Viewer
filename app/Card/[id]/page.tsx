"use client";

import CardImg from "@/app/(components)/CardImg";
import Nav from "@/app/(components)/Nav";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as Scry from "scryfall-sdk";

const Card = () => {
  const params = useParams();
  const cardId = params.id;

  const [card, setCard] = useState<Scry.Card | undefined>(undefined);

  useEffect(() => {
    const getCard = async () => {
      if (typeof cardId === "string") {
        const card = await Scry.Cards.byId(cardId);

        setCard(card);
      }
    };

    getCard();
  }, [cardId]);

  if (card) {
    return (
      <>
        <Nav searchbar />
        <div className="flex grow my-8 mx-80 justify-center h-auto max-[1300px]:mx-20 max-[800px]:mx-10 max-[690px]:flex-wrap max-[690px]:my-4">
          <div className="pt-4 px-12 max-[1300px]:px-4 max-[690px]:h-fit">
            <CardImg
              cardImgSrc={
                card.getImageURI("normal") || card.getBackImageURI("normal")
              }
              cardName={card.name}
            />
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
  } else {
    return (
      <>
        <Nav searchbar />
        <div className="container items-center">
          <h1>Erro: Falha ao carregar card.</h1>
        </div>
      </>
    );
  }
};

export default Card;
