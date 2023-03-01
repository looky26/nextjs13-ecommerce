import Image from "next/image";
import { Inter } from "@next/font/google";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import { sanityClient, urlFor } from "../utils/client";
import CategoryComponent from "./components/CategoryComponent";

const inter = Inter({ subsets: ["latin"] });


// fetch all products
const productFetching = async () => {
  const query = `*[_type == 'product'] {
    _id,
    item,
    description,
    price,
    ratings,
    slug,
    freeShipping,
    productImage,
    categories[]->{
      title
    },
      
  }
   `;

  const products = await sanityClient.fetch(query);
  return products;
};

export const revalidate = 60;

//fetch producs


export default async function Home() {
  const productsData = await productFetching();

 

  return (
    <main className="flex max-w-7xl mx-auto ">
      <Sidebar/>
      {/* <CategoryComponent/> */}
      <Products productsData={productsData} />
    </main>
  );
}
