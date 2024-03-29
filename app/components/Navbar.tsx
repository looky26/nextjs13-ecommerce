"use client";

import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { removeCategory } from "../GlobalRedux/Features/categorySlice";
import { RootState } from "../GlobalRedux/store";
import SearchBar from "./SearchBar";

interface BasketItem {
  id: string;
  item: string;
  description: string;
  price: number;
  freeShipping: boolean;
  productImage: string;
  quantity: number;
}

const Navbar = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.items);
  //console.log(items)

  const quantity = items.map((item: BasketItem) => item.quantity);
  const sum = quantity.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  //console.log(sum)

  return (
    <div className="bg-black">
      <nav className=" flex justify-between max-w-7xl mx-auto items-center py-2 px-2">
        <div className="flex space-x-5">
          <Link href={"/"}>
            <h1 className="text-4xl">AVSHOP LOGO</h1>
          </Link>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
        </div>

        <div className="flex space-x-2">
          <Link
            href={"/cart"}
            className="text-xl p-2 px-4  rounded-md border border-gray-500 "
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 lg:w-6 lg:h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <p className="hidden lg:block">Cart</p>
              <span className="text-base lg:text-lg">({sum})</span>
            </div>
          </Link>
          <button className="flex item center text-xl p-2 px-4 rounded-md border border-gray-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 lg:w-6 lg:h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p className="hidden lg:block">Sign in</p>
          </button>
        </div>
      </nav>
      <hr />
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default Navbar;
