import Image from "next/image";
import Link from "next/link";

interface props {
  cardName: string;
  cardImgSrc: string;
  cardUrl?: string;
}

const CardImg = ({ cardName, cardImgSrc, cardUrl }: props) => {
  if (cardUrl) {
    return (
      <Link href={cardUrl}>
        <Image
          alt={cardName}
          src={cardImgSrc}
          className="w-56 h-auto rounded-xl"
          width={488}
          height={680}
        />
      </Link>
    );
  } else {
    return (
      <Image
        alt={cardName}
        src={cardImgSrc}
        className="h-auto w-[488px] rounded-2xl max-[690px]:w-60 max-[690px]:rounded-xl"
        width={488}
        height={680}
      />
    );
  }
};

export default CardImg;
