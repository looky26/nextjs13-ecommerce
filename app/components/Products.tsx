'use client'
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import Product from "./Product";
import React, { useState, useEffect } from "react";
import { sanityClient } from "@/utils/client";

const Products = ({ productsData }: any) => {

  const category = useSelector(
    (state: RootState) => state.category.selectedCategories
  );


  const categoryItem = useSelector(
    (state: RootState) => state.category.categoryItem
  );
  

  //console.log(productsData)
  return (
    <div className="flex items-center flex-col space-y-5 py-5 pl-5">
    {!categoryItem.length ? (
      <div>
       
        {productsData.map((product: any) => (
          <>
            <Product
              key={product._id}
              id={product._id}
              ratings={product.ratings}
              item={product.item}
              slug={product.slug}
              description={product.description}
              price={product.price}
              freeShipping={product.freeShipping}
              productImage={product.productImage}
            />
          </>
        ))}
      </div>
    ) : (
      <div>
        {categoryItem.map((product: any) => (
          <>
            <Product
              key={product._id}
              id={product._id}
              ratings={product.ratings}
              item={product.item}
              slug={product.slug}
              description={product.description}
              price={product.price}
              freeShipping={product.freeShipping}
              productImage={product.productImage}
            />
          </>
        ))}
      </div>
    )}
  </div>
  );
};

export default Products;
