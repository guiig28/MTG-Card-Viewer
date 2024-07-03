import CardImg from "../(components)/CardImg";
import Nav from "../(components)/Nav";

const Search = () => {
  return (
    <div className="flex-grow overflow-y-auto">
      <Nav searchbar={true} />
      <div className="flex flex-wrap mt-8 mx-80 gap-8 justify-center h-auto">
        {/* <CardImg
          cardImgSrc="/ema-43-counterspell.jpg"
          cardName="Counterspell"
          cardUrl=""
        />
        <CardImg
          cardImgSrc="/clu-141-lightning-bolt.png"
          cardName="Lightning Bolt"
          cardUrl=""
        />
        <CardImg
          cardImgSrc="/clu-141-lightning-bolt.png"
          cardName="Lightning Bolt"
          cardUrl=""
        />
        <CardImg
          cardImgSrc="/clu-141-lightning-bolt.png"
          cardName="Lightning Bolt"
          cardUrl=""
        />
        <CardImg
          cardImgSrc="/clu-141-lightning-bolt.png"
          cardName="Lightning Bolt"
          cardUrl=""
        />
        <CardImg
          cardImgSrc="/clu-141-lightning-bolt.png"
          cardName="Lightning Bolt"
          cardUrl=""
        />
        <CardImg
          cardImgSrc="/clu-141-lightning-bolt.png"
          cardName="Lightning Bolt"
          cardUrl=""
        /> */}
      </div>
    </div>
  );
};

export default Search;
