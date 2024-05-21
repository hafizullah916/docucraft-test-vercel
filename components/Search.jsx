"use client";

import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchResult from "./SearchResult";

const Search = ({ docs }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  };

  const doSearch = useDebounce((searchTerm) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(found);
    setSearchResult(found);
  }, 500);

  const closeSearchResults = (e) => {
    e.preventDefault();
    router.push(e.target.href);
    setSearchTerm("");
  };
  return (
    <>
      <div class="relative hidden lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          class="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <Image
            src="/search.svg"
            alt="Search"
            className="h-5 w-5"
            width={50}
            height={50}
          />

          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search"
            className="flex-1 focus:border-none focus:outline-none"
          />
        </button>

        {/* <div class="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
          <p class="!text-lg">
            Showing results for
            <span class="font-semibold">"keyword":</span>
          </p>
          <ul role="list" class="divide-y divide-gray-100 [&>*]:py-2">
            <li class="">
              <a class="transition-all hover:text-emerald-600" href="#">
                How to create a new component in Vue.js
              </a>
            </li>
            <li class="">
              <a class="transition-all hover:text-emerald-600" href="#">
                How to create a new component in React.js
              </a>
            </li>
            <li class="">
              <a class="transition-all hover:text-emerald-600" href="#">
                Next.js Routing
              </a>
            </li>
            <li class="">
              <a class="transition-all hover:text-emerald-600" href="#">
                SSR - What is it?
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      {searchTerm && searchTerm.trim().length > 0 && (
        <SearchResult
          results={searchResult}
          searchTerm={searchTerm}
          closeSearchResults={closeSearchResults}
        />
      )}
    </>
  );
};

export default Search;
