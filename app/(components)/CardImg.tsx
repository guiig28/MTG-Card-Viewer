import Image from "next/image";
import Link from "next/link";

interface props {
  cardName: string;
  cardImgSrc: string;
  cardUrl: string;
}

const CardImg = ({ cardName, cardImgSrc, cardUrl }: props) => {
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
};

export default CardImg;
