"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchItem } from "../GlobalRedux/Features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setSearchItem(search));

    console.log("submitted:" + search);
  };

  return (
    <form
      className="text-center space-y-2 lg:space-y-0 text-sm lg:text-lg md:text-base space-x-2 "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter your keyword"
        className="p-1 md:p-2 rounded-md w-64 md:w-96"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link href={`/search-results/${search}`}>
        <button className="bg-gray-500 p-1 md:p-2 rounded-md px-4">
          Search
        </button>
      </Link>
    </form>
  );
};

export default SearchBar;
