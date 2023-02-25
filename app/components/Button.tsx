"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, addItemWithQuantity } from "../GlobalRedux/Features/cartSlice";

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
  quantity: number,
}

const Button: React.FC<ButtonProps> = ({
  id,
  item,
  description,
  price,
  freeShipping,
  productImage,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <button
    disabled={quantity === 0}
      onClick={() =>
        dispatch(
          addItemWithQuantity({
            id,
            item,
            description,
            price,
            freeShipping,
            productImage,
            quantity,
            
          })
        )
      }
      className={`${quantity === 0 ? "bg-gray-500": "bg-blue-600 hover:bg-blue-500"}  p-2 rounded-md font-medium `}
    >
      Add to Cart
    </button>
  );
};

export default Button;
