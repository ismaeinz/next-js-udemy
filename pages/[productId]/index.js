// domainName/productId
import mongoose from "mongoose";
import ProductDetails from "../../components/products/ProductDetails";
import { dbConnect } from "@/util/mongo";
import Product from "@/models/Product";
import Head from "next/head";

function ProductDetailsPage(props) {
  return (
    <>
      <Head>
        <title>{props.productData.name}</title>
        <meta name="description" content="Simple  App" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <ProductDetails
        image={props.productData.image}
        name={props.productData.name}
        price={props.productData.price}
        desc={props.productData.desc}
      />
    </>
  );
}

export default ProductDetailsPage;
// for dynamic route
export async function getStaticPaths() {
  // connect to DB to get all Ids
  dbConnect();
  const products = await Product.find({}, { _id: 1 });
  return {
    fallback: false, //will accept that ids 1,2
    paths: products.map((product) => ({
      params: {
        productId: product._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;
  const selectedProduct = await Product.findById({
    _id: new mongoose.Types.ObjectId(productId),
  });
  return {
    props: {
      productData: {
        image: selectedProduct.image,
        name: selectedProduct.name,
        price: selectedProduct.price,
        desc: selectedProduct.desc,
        id: selectedProduct._id.toString(),
      },
    },
  };
}
