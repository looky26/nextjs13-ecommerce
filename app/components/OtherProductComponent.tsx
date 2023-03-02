'use client'

import { urlFor } from "@/utils/client";
import Link from "next/link";
import React from "react";

const OtherProductComponent = ({ products }: any) => {

  console.log('productSlugItems:', products);

  const randomItems: any = [];

  while (randomItems.length < 5) {
    const randomIndex = Math.floor(Math.random() * products.length);
    const randomItem = products[randomIndex];
    if (!randomItems.includes(randomItem)) {
      randomItems.push(randomItem);
    }
  }

  console.log('random items:' ,randomItems)

  return (
    <div className="flex justify-evenly items-center flex-wrap gap-y-2">
      {randomItems.map((item:any) => (
        <Link href={"/product/" + item.slug.current}>
          <div className="flex flex-col items-center bg-zinc-700 p-2 rounded-md w-96 h-80">
            <img
              src={urlFor(item.productImage).url()}
              alt=""
              className="h-60 w-60"
            />
            <p className="text-center">{item.item}</p>
            <p>&#8369;{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OtherProductComponent;
