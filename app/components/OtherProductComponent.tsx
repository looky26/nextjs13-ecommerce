

import { urlFor } from "@/utils/client";
import Link from "next/link";
import React from "react";

const OtherProductComponent = ({ products }: any) => {
  return (
    <div className="flex justify-evenly items-center flex-wrap gap-y-2">
      {products.map((item:any) => (
        <Link href={"/product/" + item.slug.current}>
          <div className="flex flex-col items-center bg-zinc-700 p-2 rounded-md">
            <img
              src={urlFor(item.productImage).url()}
              alt=""
              className="h-60 w-60"
            />
            <p>{item.item}</p>
            <p>{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OtherProductComponent;