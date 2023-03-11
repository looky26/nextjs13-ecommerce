import { sanityClient } from "@/utils/client";

import CategoryComponent from "./components/CategoryComponent";

const fetchDataBasedOnCategory = async () => {
  const query = `*[_type == "category"] {
    _id,
    title,
    slug,
    categoryImage,
  }
      
    `;

  const categories = await sanityClient.fetch(query);
  return categories;
};

export const revalidate = 60;

const Home = async () => {
  const categories = await fetchDataBasedOnCategory();
  console.log(categories);

  return (
    <div className="relative">
      <div className="bg-[url('/Hero.avif')] bg-no-repeat bg-cover h-[1000px] w-full">
        {/* <img src='/Hero.avif' alt="" /> */}
        <div className="text-center pt-20 lg:text-left lg:pt-80 lg:pl-40">
          <div className="">
            <h1 className="text-6xl">BEST GAMING RIGS</h1>
            <h2 className="text-5xl ">OPTIMIZED FOR YOUR BUDGET.</h2>
          </div>

          <button className=" mt-10 bg-blue-400 p-3 px-5 text-lg rounded-lg">
            Shop now
          </button>
        </div>
      </div>
      {/* Category */}
      <h1 className="text-center text-white text-4xl -mt-32">
        Shop by Category
      </h1>

      <div className=" max-w-[1600px] mx-auto text-slate-100 pb-20 px-5">
      <div className="flex flex-wrap gap-5 lg:gap-10 justify-center text-center mt-10 ">
        {/* <div className="grid gap-10  grid-cols-fluid text-center mt-10 "> */}
          {categories.map((cat: any) => (
            <div key={cat._id} className="w-52 md:w-60 lg:w-60">
              <CategoryComponent cat={cat} />
            </div>
          ))}

        </div>
      </div>

    
    </div>
  );
};

export default Home;
