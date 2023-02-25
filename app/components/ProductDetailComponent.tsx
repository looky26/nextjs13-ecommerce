"use client";


import { urlFor } from "@/utils/client";
import React, { useState } from "react";
import PortableText from "react-portable-text";
import Button from "./Button";

const ProductDetailComponent = ({ productSlug }: any) => {
  const [quantity, setQuantity] = useState(1);
  const isDisabled = quantity === 0;

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };
  return (
    <div>
      <div className="flex  max-w-7xl mx-auto bg-zinc-900">
        {/* left */}
        <img src={urlFor(productSlug.productImage).url()} alt="" className="w-96 h-96" />

        {/* right */}
        <div className="ml-20 space-y-3 pt-5">
          <h1 className="text-2xl">{productSlug.item}</h1>
          <div className="flex">
            {Array(productSlug.ratings)
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
          <p>Brand</p>
          <p>&#8369;{productSlug.price}</p>
          <div className="flex  items-center">
            <p className="mr-10 font-bold">Quantity</p>
            <button 
            disabled={isDisabled}
              className={ `${isDisabled ? "bg-gray-500": "bg-red-600"} px-5 py-3 rounded-md  hover:bg-red-500 border` }
              onClick={decreaseQuantity}
            >
              -
            </button>
            <p className="p-5 text-lg font-medium">{quantity}</p>
            <button
              className="bg-green-600 hover:bg-green-500 px-4 py-3 rounded-md border"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          <Button
          
            quantity={quantity}
            key={productSlug._id}
            id={productSlug._id}
            item={productSlug.item}
            slug={productSlug.slug}
            description={productSlug.description}
            price={productSlug.price}
            freeShipping={productSlug.freeShipping}
            productImage={productSlug.productImage}
          />
          <button className="bg-orange-300 p-2 rounded-md ml-4 text-black font-medium">
            Buy Now
          </button>
        </div>

        {/* <h1>{product.description}</h1> */}
      </div>
      <div className="max-w-7xl mx-auto border border-zinc-700 mt-10 p-5 bg-zinc-900">
        <PortableText
          className=""
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
          content={productSlug.description}
          serializers={{
            h1: (props: any) => (
              <h1 className="text-2xl font-bold my-5" {...props}></h1>
            ),
            h2: (props: any) => (
              <h1 className="text-xl font-bold my-5" {...props}></h1>
            ),
            li: ({ children }: any) => (
              <h1 className="ml-4 list-disc">-{children}</h1>
            ),
            link: ({ href, children }: any) => (
              <a href={href} className="text-blue-500 hover:underline">
                {children}
              </a>
            ),
          }}
        />
      </div>
    
    </div>
  );
};

export default ProductDetailComponent;
