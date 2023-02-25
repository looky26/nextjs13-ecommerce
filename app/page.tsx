import Image from "next/image";
import { Inter } from "@next/font/google";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import { sanityClient, urlFor } from "../utils/client";

const inter = Inter({ subsets: ["latin"] });

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
      
  }
   `;

  const products = await sanityClient.fetch(query);
  return products;
};

export default async function Home() {
  const productsData = await productFetching();
  return (
    <main className="flex max-w-7xl mx-auto">
      <Sidebar />
      <Products productsData={productsData} />
    </main>
  );
}
