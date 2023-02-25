'use client'
import React from "react";

const Sidebar = () => {

    const star = 5

  return (
    <aside className="flex-none w-80 mt-5">
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
        <h1>Category</h1>
        <div className="">
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <p className="inline-block">Electronics</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <p className="inline-block">Laptops</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <p className="inline-block">Toys</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <p className="inline-block">Office</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input className="w-5 h-5" type="checkbox" placeholder="Min" />
            <p className="inline-block">Beauty</p>
          </div>
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
