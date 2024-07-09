import HomeSearchbar from "./(components)/HomeSearchbar";
import Nav from "./(components)/Nav";

const Home = () => {
  return (
    <div className="flex-1">
      <Nav searchbar={false} />
      <HomeSearchbar />
    </div>
  );
};

export default Home;
