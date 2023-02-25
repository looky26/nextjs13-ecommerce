import Button from "@/app/components/Button";
import OtherProductComponent from "@/app/components/OtherProductComponent";
import ProductDetailComponent from "@/app/components/ProductDetailComponent";
import { sanityClient } from "@/utils/client";
import { groq } from "next-sanity";

type PageProps = {
  params: {
    slug: string;
  };
};

const fetchProductDetailData = async (slug: string) => {
  const querySlug = `*[_type == 'product' && slug.current == $slug][0] {
    _id,
    item,
    description,
    price,
    ratings,
    slug,
    freeShipping,
    productImage,
      
  }`;

  const productSlug = await sanityClient.fetch(querySlug, {
    slug: slug,
    // cache: "force-cache",
  });
  return productSlug;
};

const fetchProductsData = async () => {
  const queryProducts = `*[_type == 'product'] {
    _id,
    item,
    description,
    price,
    ratings,
    slug {
      current
    },
    freeShipping,
    productImage,
      
  }`;

  const products = await sanityClient.fetch(queryProducts);
  return products;
};

export const revalidate = 60

export async function generateStaticParams() {
  const query = groq`*[_type == 'product']
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

const ProducDetail = async ({ params: { slug } }: PageProps) => {
  const productSlug = await fetchProductDetailData(slug);
  const products = await fetchProductsData();

  console.log(productSlug.productImage);
  //console.log(productSlug);
  return (
    <div>
      <ProductDetailComponent productSlug={productSlug} />

      {/* Moving Other products */}
      <div className="max-w-7xl mx-auto mt-20">
        <h1 className="text-center text-3xl font-bold">You may also like</h1>
        <div>
          <OtherProductComponent products={products} />
        </div>
      </div>
      {/* COMMENTS HERE */}
      <div className="max-w-7xl mx-auto mt-40">
        <h1>Comments and Reviews</h1>
      </div>
    </div>
  );
};

export default ProducDetail;
