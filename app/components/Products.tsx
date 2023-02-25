"use client";

import Product from "./Product";

const Products = ({ productsData }: any) => {
  console.log(productsData)
  return (
    <div className="flex items-center flex-col space-y-5 py-5 pl-5">
      {productsData.map((product: any) => (
        <>
          
            <Product
              key={product._id}
              id={product._id}
              ratings={product.ratings}
              item={product.item}
              slug={product.slug}
              description={product.description}
              price={product.price}
              freeShipping={product.freeShipping}
              productImage={product.productImage}
            />
          
        </>
      ))}
    </div>
  );
};

export default Products;
