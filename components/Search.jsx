"use client";

import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useState } from "react";
import SearchImg from "../public/search.svg";
const Search = ({ docs }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTerm(value);
    setSearchResult(value);
    doSearch(value);
  };
  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(term.toLowerCase());
    });
    console.log(found);
    setSearchResult(found);
  }, 500);
  return (
    <>
      <div className=" lg:block lg:max-w-md lg:flex-auto ">
        {" "}
        <button
          type="button"
          class="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
          aria-label="Find something..."
        >
          <Image
            src={SearchImg}
            alt="Search"
            width={50}
            height={50}
            class="h-5 w-5"
          />
          <input
            type="text"
            onChange={handleChange}
            value={term}
            placeholder="Search..."
            className=" flex-1 focus:border-none focus:outline-none"
          />
        </button>
      </div>
    </>
  );
};

export default Search;
