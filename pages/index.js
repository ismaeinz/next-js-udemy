import { Fragment } from "react";
import ProductList from "../components/products/ProductList";
import axios from "axios";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <meta name="description" content="Simple  App" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <ProductList products={props.products} />
    </Fragment>
  );
}
export default HomePage;

//server side
export async function getServerSideProps() {
  // fetch data from api
  const res = await axios.get(
    `${process.env.APP_DEV || process.env.APP_PROD}/api/products`
  );
  return {
    props: {
      products: res.data.data.map((product) => ({
        image: product.image,
        name: product.name,
        price: product.price,
        id: product._id.toString(),
      })),
    },
  };
}
