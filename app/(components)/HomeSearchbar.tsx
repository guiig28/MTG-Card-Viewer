"use client";

import React, { FormEvent, useState } from "react";
import SearchIcon from "./(icons)/SearchIcon";
import { useRouter } from "next/navigation";

const HomeSearchbar = () => {
  const [searchName, setSearchName] = useState("");

  const router = useRouter();

  const handleSearch = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.push(`/Search?name=${searchName}`);
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      <form className="w-96 max-[500px]:w-56 -mt-28" onSubmit={handleSearch}>
        <div className="flex">
          <input
            type="search"
            className="rounded-l-lg py-3 px-2 bg-transparent border-2 border-gray-800 focus:border-2 focus:ring-gray-400 focus:border-gray-400 w-full max-[500px]:text-sm max-[500px]:placeholder:text-sm"
            placeholder="Procurar carta..."
            value={searchName}
            required
            onChange={(ev) => {
              setSearchName(ev.currentTarget.value);
            }}
          />
          <button
            type="submit"
            className="py-3 px-4 border-y-2 border-r-2 border-gray-800 bg-gray-800 rounded-r-lg hover:bg-gray-400 hover:cursor-pointer"
          >
            <SearchIcon className="w-5 h-5 stroke-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeSearchbar;
