"use client";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import Product from "./Product";
import React, { useState, useEffect } from "react";
import { sanityClient } from "@/utils/client";

type ProductProps = {
  key: string;
  id: string;
  _id: string;
  ratings: number;
  item: string;
  slug: {
    current: string;
  };
  description: string;
  price: number;
  freeShipping: boolean;
  productImage: string;
};

const Products = ({ productsData }: any) => {
  const [itemsToLoad, setItemsToLoad] = useState(4);
  console.log("products:",productsData)
  const category = useSelector(
    (state: RootState) => state.category.selectedCategories
  );

  const categoryItem = useSelector(
    (state: RootState) => state.category.categoryItem
  );

  //console.log("catItemonselect", categoryItem);

  //console.log(productsData)
  return (
    <div className="flex items-center flex-col mt-5  pl-5">
      {!categoryItem.length ? (
        <div className="space-y-5">
          {productsData.slice(0, itemsToLoad).map((product: ProductProps) => (
            <div key={product._id}>
              <Product
                id={product._id}
                ratings={product.ratings}
                item={product.item}
                slug={product.slug}
                description={product.description}
                price={product.price}
                freeShipping={product.freeShipping}
                productImage={product.productImage}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          {categoryItem.map((product: ProductProps) => (
            <div key={product.id}>
              <Product
                id={product.id}
                ratings={product.ratings}
                item={product.item}
                slug={product.slug}
                description={product.description}
                price={product.price}
                freeShipping={product.freeShipping}
                productImage={product.productImage}
              />
            </div>
          ))}
        </div>
      )}
      <button className="bg-amber-700 p-2 mt-5 px-3 rounded-md" onClick={() => setItemsToLoad((prev) => prev + 5)}>
        Load more
      </button>
    </div>
  );
};

export default Products;
