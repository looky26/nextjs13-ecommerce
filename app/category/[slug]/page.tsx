import Product from "@/app/components/Product";
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
  const params = { categorySlug: categorySlug, cache: "force-cache" };
  const results = await sanityClient.fetch(query, params);
  return results;
};

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

  return (
    <div className="bg-black  text-white flex items-center flex-col space-y-5 py-5 pl-5 h-[100vh]">
      <h1>Category: {slug.replace(/-/g, " ").toUpperCase()}</h1>
      {results.map((product: any) => (
        // <>

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

        //   <p>{item.item}</p>
        //   <img src={urlFor(item.productImage).url()} alt="" />
        // </>
      ))}
    </div>
  );
};

export default Category;
