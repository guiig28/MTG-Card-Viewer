"use client";

import CardImg from "../(components)/CardImg";
import Nav from "../(components)/Nav";
import * as Scry from "scryfall-sdk";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const searchName = searchParams.get("name");

  const [cardPages, setCardPages] = useState<[Scry.Card[]]>([[]]);
  const [paginationLength, setPaginationLength] = useState(1);
  const [paginationIndex, setPaginationIndex] = useState(0);

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
    <div className="flex-grow overflow-y-auto">
      <Nav searchbar={true} value={searchName || undefined} />
      <div className="flex flex-wrap mt-8 mx-80 gap-8 justify-center h-auto">
        {cardPages[paginationIndex].map((card) => (
          <CardImg
            cardImgSrc={
              card.getImageURI("normal") || card.getBackImageURI("normal")
            }
            cardName={card.name}
            cardUrl={``}
            key={cardPages[paginationIndex].indexOf(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
