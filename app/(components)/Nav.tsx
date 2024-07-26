"use client";

import Link from "next/link";
import HomeIcon from "./(icons)/HomeIcon";
import MenuIcon from "./(icons)/MenuIcon";
import SearchIcon from "./(icons)/SearchIcon";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface props {
  searchbar: boolean;
  value?: string;
}

const Nav = ({ searchbar, value }: props) => {
  const router = useRouter();
  const [searchName, setSearchName] = useState(value);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleSearch = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.push(`/Search?name=${searchName}`);
  };

  const handleDropdown = () => {
    if (dropdownIsOpen) {
      setDropdownIsOpen(false);
    } else {
      setDropdownIsOpen(true);
    }
  };

  return (
    <div className="flex justify-between p-4">
      <div className="mr-5">
        <Link href="/">
          <HomeIcon />
        </Link>
      </div>
      <div className="flex items-center">
        {searchbar ? (
          <form onSubmit={handleSearch}>
            <div className="relative flex items-center stroke-gray-800 focus-within:stroke-gray-400">
              <SearchIcon className="w-5 h-5 absolute ml-3" />
              <input
                type="search"
                className="rounded-lg pr-3 pl-10 py-2 bg-transparent border-2 border-gray-800 focus:border-2 focus:ring-gray-400 focus:border-gray-400 w-full text-sm placeholder:text-sm"
                placeholder="Procurar carta..."
                value={searchName}
                onChange={(ev) => {
                  setSearchName(ev.currentTarget.value);
                }}
              />
            </div>
          </form>
        ) : (
          ""
        )}

        {/* Menu Retrátil: */}
        <div className="ml-5 relative">
          <button onClick={handleDropdown}>
            <MenuIcon menuOpen={dropdownIsOpen} />
          </button>
          {dropdownIsOpen && (
            <div className="flex flex-col absolute right-0 top-14 w-40 border-2 border-gray-800 rounded-md text-center text-lg text-gray-800 shadow-lg">
              <Link href="/Favorites">
                <div className="py-2 cursor-pointer hover:text-gray-400">
                  Favoritos
                </div>
              </Link>
              <div className="py-2 cursor-pointer hover:text-gray-400 border-t-2 border-gray-800">
                Github
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
