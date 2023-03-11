"use client";

import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasketTotal } from "../GlobalRedux/Features/cartSlice";
import { RootState } from "../GlobalRedux/store";
import {
  addItem,
  removeItem,
  clearCart,
  removeFromCart,
  addQuantity,
} from "../GlobalRedux/Features//cartSlice";
import Link from "next/link";
import { urlFor } from "@/utils/client";
import { removeCategory } from "../GlobalRedux/Features/categorySlice";

interface BasketItem {
  id: string;
  item: string;
  description: string;
  price: number;
  ratings: number;
  freeShipping: boolean;
  productImage: string;
  quantity: number;
}

const CheckoutProduct = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  //console.log(items);

  const quantity = items.map((item: BasketItem) => item.quantity);
  const sumQuantity = quantity.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const computeTotalPrice = () => {
    const itemPrices = items.map(
      (item: BasketItem) => item.price * item.quantity
    );
    const totalPrice = itemPrices.reduce((total, price) => total + price, 0);
    return totalPrice;
  };

  //console.log(sumPrice*sumQuantity)
  const handleEmptyCategory = () => {
    dispatch(removeCategory([]))
  }
  
  useEffect(() => {
    handleEmptyCategory()
  }, [])


  return (
    <div className="bg-black h-full">
    <div
      className={`${
        items.length ? "flex" : "flex justify-center"
      }  max-w-7xl mx-auto bg-zinc-800`}
    >
      {items.length === 0 ? (
        <div className="p-5 flex flex-col h-[100vh]">
          <h2>Your Shopping Basket is empty</h2>
          <p>You have no items in your cart.</p>
          <Link href={'/'}>
            <button className="text-lg border border-orange-500 py-3 px-5 mt-5 rounded-md">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className=" p-5 h-[100vh]">
          <h2 className="checkout__title">Your shopping Basket</h2>
          {items.map((item: BasketItem) => (
            <div
              key={item.id}
              className="flex mt-5 border-[3px] border-zinc-800  p-5"
            >
              <img
                className="w-60 h-60"
                src={urlFor(item.productImage).url()}
                alt=""
              />
              <div className="ml-10">
                <h1>{item.item}</h1>
                <div className="flex">
                  {Array(item.ratings)
                    .fill(0)
                    .map((_) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gold"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 inline-block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                </div>
                <p>&#8369;{item.price}</p>
                <div className="flex  items-center">
                  <p className="mr-10 font-bold">Quantity</p>
                  <button
                    className="bg-red-600 hover:bg-red-500 border px-5 py-3 rounded-md"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    -
                  </button>
                  <p className="p-5 text-lg font-medium">{item.quantity}</p>
                  <button
                    className="bg-green-600 hover:bg-green-500 border px-[17px] py-3 rounded-md"
                    onClick={() => dispatch(addQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-yellow-600 text-black p-1 rounded mt-10 px-2 hover:bg-yellow-500"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ORDER SUMMARY */}

      {items.length === 0 ? (
        ""
      ) : (
        <div className="pl-40 mt-20 mb-10">
          <button
            className="mb-10 bg-red-500 p-2 rounded-md"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <h1 className="text-left">Order Summary</h1>
          <p>
            Subtotal ({sumQuantity} items) :
            <span className="ml-10">&#8369;{computeTotalPrice()}</span>{" "}
          </p>
          <button className="bg-yellow-600 text-black p-1 rounded mt-10">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default CheckoutProduct;
