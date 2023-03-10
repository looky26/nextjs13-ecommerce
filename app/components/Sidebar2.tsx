"use client";
import { sanityClient } from "@/utils/client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCategory,
  setCategoryItem,
  toggleCategory,
} from "../GlobalRedux/Features/categorySlice";
import { RootState } from "../GlobalRedux/store";

const Sidebar = ({ brands, slug }: any) => {
  const dispatch = useDispatch();
  const category = useSelector(
    (state: RootState) => state.category.selectedCategories
  );

  const categoryItem = useSelector(
    (state: RootState) => state.category.categoryItem
  );

  //const items = ['Electronics', "Laptop"]'
  //console.log("sidebar:", slug)
  //console.log('selectedBrand:', category)
  console.log("brandItems:", categoryItem);

  useEffect(() => {
    const query = `*[_type == 'product' && brand in [${category
      .map((item) => `"${item}"`)
      .join(", ")}] && '${slug}' in categories[]->.slug.current] {
        _id,
        item,
        description,
        brand,
        price,
        ratings,
        slug {
          current
        },
        "categories": categories[]->{
          title,
          slug
        },
        freeShipping,
        productImage,
      }`;

    //console.log("category:", category);

    sanityClient
      .fetch(query)
      .then((data) => dispatch(setCategoryItem(data)))

      .catch((error) => console.error(error));
  }, [category]);

  //console.log(products);

  //console.log(category);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log("value:", value);
    dispatch(toggleCategory(value));
    // dispatch(setCategoryItem(products[0]))
  };

  //console.log(categoryItem.length)
  //console.log(category)

  return (
    <aside className="flex-none w-80 mt-16">
      <div className="p-5 border border-solid border-gray-500 rounded-md">
        <h1>Price ($)</h1>
        <div className="space-x-2 mt-2">
          <input
            className="w-20 p-3 rounded-md"
            type="text"
            placeholder="Min"
          />
          <input
            className="w-20 p-3 rounded-md"
            type="text"
            placeholder="Max"
          />
          <button className="bg-gray-500 p-2 rounded-md py-3 px-7">Go</button>
        </div>
      </div>
      <div className="p-5 border border-solid border-gray-500 rounded-md">
        <h1>Brand</h1>
        <div className="">
          {brands.map((brand: string) => (
            <div className="flex items-center space-x-2 mt-2">
              <input
                className="w-5 h-5"
                type="checkbox"
                placeholder="Min"
                name="categoryName"
                value={brand}
                onChange={handleInputChange}
              />
              <p className="inline-block">{brand}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 border border-solid border-gray-500 rounded-md">
        <h1>Ratings</h1>
        <div className="">
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gold"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gold"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gold"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gold"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gold"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
