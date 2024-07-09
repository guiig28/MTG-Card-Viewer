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

  const handleSearch = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.push(`/Search?name=${searchName}`);
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
            <div className="relative flex items-center stroke-gray-800 focus-within:stroke-gray-500">
              <SearchIcon className="w-5 h-5 absolute ml-3" />
              <input
                type="search"
                className="rounded-lg pr-3 pl-10 py-2 bg-transparent border-2 border-gray-800 focus:border-2 focus:ring-gray-500 focus:border-gray-500 w-full placeholder:text-sm"
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
        <div className="ml-5">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Nav;
