import { sanityClient } from "@/utils/client";
import React from "react";

type PageProps = {
  params: {
    slug: string;
  };
};

const fetchSearchSlugItems = async (searchSlug: any) => {
  const query = `*[_type == 'product' && (item match $searchSlug ||categories[]->.slug.current match $searchSlug)] {
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
      }[0...50]`;
  const params = { searchSlug: searchSlug, cache: "force-cache" };
  const results = await sanityClient.fetch(query, params);
  return results;
};

export const revalidate = 60;

const SearchItems = async ({ params: { slug } }: PageProps) => {
  //console.log(slug)
  const results = await fetchSearchSlugItems(slug);
  console.log(results);

  return (
    <div>
      <h1>Searched Items</h1>
      {results.map((item:any)=>(
        <div key={item._id}>
        <p>{item.item}</p>
        <p>{item.price}</p>
        </div>
        
      ))}
    </div>
  );
};

export default SearchItems;
