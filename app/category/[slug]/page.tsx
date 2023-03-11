import Product from "@/app/components/Product";
import Products from "@/app/components/Products";
import Sidebar2 from "@/app/components/Sidebar2";
import { sanityClient, urlFor } from "@/utils/client";
import { groq } from "next-sanity";
import React from "react";

type PageProps = {
  params: {
    slug: string;
  };
};

const fetchSlugItemDatas = async (categorySlug: any) => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] {
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
  const params = { categorySlug: categorySlug, cache: "force-cache" };
  const results = await sanityClient.fetch(query, params);
  return results;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type == 'category']
  {
    slug
  }
  `;
  const slugs = await sanityClient.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug.slug.current);
  return slugRoutes.map((slug: any) => ({
    slug: slug,
  }));
}

const Category = async ({ params: { slug } }: PageProps) => {
  const results = await fetchSlugItemDatas(slug);
  console.log(results);
  const arrayOfBrands = results.map((item: { brand: string }) => item.brand);
  const brands = arrayOfBrands.filter(
    (value: any, index: number) => arrayOfBrands.indexOf(value) === index
  );
  console.log(brands);

  return (
    <div className="flex justify-center bg-black px-5">
      <Sidebar2 brands={brands} slug={slug} />
      <div className="  text-white flex items-center flex-col space-y-5 py-5 pl-5 h-[100vh]">
        <h1>Category: {slug.replace(/-/g, " ").toUpperCase()}</h1>
  
            <Products productsData={results}
           
            />
        

      </div>
    </div>
  );
};

export default Category;
