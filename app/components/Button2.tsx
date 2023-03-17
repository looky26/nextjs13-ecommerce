"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItem,

} from "../GlobalRedux/Features/cartSlice";

interface ButtonProps {
  id: string;
  item: string;
  description: string;
  slug: {
    current: string;
  };
  price: number;
  freeShipping: boolean;
  productImage: string;
  
}

const Button2: React.FC<ButtonProps> = ({
  id,
  item,
  description,
  price,
  freeShipping,
  productImage,
  
}) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() =>
        dispatch(
          addItem({
            id,
            item,
            description,
            price,
            freeShipping,
            productImage,
          })
        )
      }
      className=
         "bg-blue-600 hover:bg-blue-500  p-2 rounded-md font-medium"
       
    >
      Add to Cart
    </button>
  );
};

export default Button2;
