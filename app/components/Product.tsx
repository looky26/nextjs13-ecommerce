"use client";


import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import Link from "next/link";
import { addItem } from "../GlobalRedux/Features/cartSlice";
import { urlFor, sanityClient } from "@/utils/client";
import { removeCategory } from "../GlobalRedux/Features/categorySlice";

interface ProductProps {
  id: string;
  item: string;
  description: string;
  slug: {
    current: string;
  };
  ratings: number;
  price: number;
  freeShipping: boolean;
  productImage: string;
}

const Product: React.FC<ProductProps> = ({
  id,
  item,
  slug,
  ratings,
  description,
  price,
  freeShipping,
  productImage,
}) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  //console.log(items);




 

  return (
    <div className="border border-gray-400 border-solid p-2 rounded-md">
      <div className="flex items-center" >
        <Link className="flex items-center " href={`/product/${slug.current}`} >
          <img
            className="w-60 h-60 object-contain"
            src={urlFor(productImage).url()}
            alt="KOORUI Business Computer Monitor Display"
          />
          <div className="p-10 w-[500px]">
            <h1>{item}</h1>
            <div className="flex">
              {Array(ratings)
                .fill(0)
                .map((_) => (
                  <svg
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
            {/* <p>{description}</p> */}
          </div>
        </Link>
        <div className="flex flex-col items-center w-96 space-y-2">
          <p>&#8369;{price}</p>
          <p className="text-green-300">Free Shipping</p>
          <button
            onClick={() =>
              dispatch(
                addItem({
                  id,
                  item,
                  description,
                  price,
                  freeShipping,
                  productImage,
                  ratings,
                })
              )
            }
            className="bg-blue-600 p-2 rounded-md z-40 hover:bg-blue-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
