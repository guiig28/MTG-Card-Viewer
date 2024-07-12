import HomeSearchbar from "./(components)/HomeSearchbar";
import Nav from "./(components)/Nav";

const Home = () => {
  return (
    <>
      <Nav searchbar={false} />
      <HomeSearchbar />
    </>
  );
};

export default Home;
