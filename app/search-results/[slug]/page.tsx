import Button2 from "@/app/components/Button2";
import SearchBar from "@/app/components/SearchBar";
import { sanityClient, urlFor } from "@/utils/client";
import React from "react";

type PageProps = {
  params: {
    slug: string;
  };
};

const fetchSearchSlugItems = async (searchSlug: any) => {
  const query = `*[_type == 'product' && (item match $searchSlug || description  match $searchSlug ||categories[]->.slug.current match $searchSlug)] {
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
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="text-center lg:hidden">
        <SearchBar />
      </div>
      <h1>Searched Items</h1>
      {results.length === 0 ? (
        <p>Seached item not found. Please do a much refined search</p>
      ) : (
        <div>
          {results.map((item: any) => (
            <div
              key={item._id}
              className="flex items-center space-x-14 border border-gray-400 border-solid p-5 "
            >
              <img
                className="w-60 h-60 object-contain"
                src={urlFor(item.productImage)?.url()}
                alt="KOORUI Business Computer Monitor Display"
              />
              <div className="space-y-3">
                <p>{item.item}</p>
                <div className="flex">
                  {Array(item.ratings)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
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
                <p>{item.price}</p>

                <Button2
                  key={item._id}
                  id={item._id}
                  item={item.item}
                  slug={item.slug}
                  description={item.description}
                  price={item.price}
                  freeShipping={item.freeShipping}
                  productImage={item.productImage}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchItems;
