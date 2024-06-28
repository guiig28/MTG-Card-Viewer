import Link from "next/link";
import HomeIcon from "./(icons)/HomeIcon";
import MenuIcon from "./(icons)/MenuIcon";
import SearchIcon from "./(icons)/SearchIcon";

interface props {
  searchbar: boolean;
}

const Nav = ({ searchbar }: props) => {
  return (
    <div className="flex justify-between p-4">
      <div className="mr-5">
        <Link href="/">
          <HomeIcon />
        </Link>
      </div>
      <div className="flex items-center">
        {searchbar ? (
          <form>
            <div className="relative flex items-center stroke-gray-800 focus-within:stroke-gray-500">
              <SearchIcon className="w-5 h-5 absolute ml-3" />
              <input
                type="search"
                className="rounded-lg pr-3 pl-10 py-2 bg-transparent border-2 border-gray-800 focus:border-2 focus:ring-gray-500 focus:border-gray-500 w-full placeholder:text-sm"
                placeholder="Procurar carta..."
              />
            </div>
          </form>
        ) : (
          ""
        )}
        <div className="ml-5">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Nav;
