"use client";
import { urlFor } from "@/utils/client";
import Link from "next/link";
import React from "react";

const CategoryComponent = ({ cat }: any) => {
  // console.log("categorycomponent:", categories.map(item=>item.categories[2].title))
  console.log("category:", cat);

  // const bgUrl = urlFor(cat.categoryImage).url();
  // console.log(bgUrl);

  return (
    <Link href={`/category/${cat.slug.current}`}>
      <div
        className={`h-40 lg:h-80 bg-no-repeat bg-cover bg-center border-2 border-blue-300 rounded-md`}
        style={{ backgroundImage: `url(${urlFor(cat.categoryImage).url()})` }}
      >
        {/* <img src={urlFor(cat.categoryImage)?.url()} alt="" /> */}

        <h1 className=" bg-orange-400 rounded-t-[4px]">{cat.title}</h1>
      </div>
    </Link>
  );
};

export default CategoryComponent;
