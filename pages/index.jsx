import Head from "next/head";
import Input from "../components/form/Input";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Home from "./home";
import axios from "axios";

export default function Index({ categoryList, productList }) {
  return (
    <div className="">
      <Head>
        <title>Sherpa Food</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Home categoryList={categoryList} productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  let products = [
    {
      _id: '65a68eb3e0fc15e1084304da',
      title: 'ผัดกระเพรา',
      desc: 'ไข่ดาว 7 พิเศษ 10',
      prices: [ 40 ],
      category: 'ราดข้าว',
      img: 'http://res.cloudinary.com/dp5whpvw0/image/upload/v1705414321/food-ordering/aqpsxquyqeo8z0iqadfm.jpg',
      extraOptions: [ [Object], [Object] ],
      createdAt: '2024-01-16T14:12:03.507Z',
      updatedAt: '2024-01-16T14:12:03.507Z',
      __v: 0
    },
    {
      _id: '65a68ed3e0fc15e1084304e9',
      title: 'ข้าวผัด',
      desc: 'พิเศษ 10',
      prices: [ 40 ],
      category: 'ผัด',
      img: 'http://res.cloudinary.com/dp5whpvw0/image/upload/v1705414353/food-ordering/tuzkgu7z2anj7thl9let.jpg',
      extraOptions: [ [Object] ],
      createdAt: '2024-01-16T14:12:35.635Z',
      updatedAt: '2024-01-16T14:12:35.635Z',
      __v: 0
    },
    {
      _id: '65a68f0ae0fc15e1084304fd',
      title: 'ต้มยำ',
      desc: 'พิเศษ 10',
      prices: [ 50 ],
      category: 'ต้ม',
      img: 'http://res.cloudinary.com/dp5whpvw0/image/upload/v1705414408/food-ordering/rmtipz71omp3dwv8rlaq.jpg',
      extraOptions: [ [Object] ],
      createdAt: '2024-01-16T14:13:30.681Z',
      updatedAt: '2024-01-16T14:13:30.681Z',
      __v: 0
    },
    {
      _id: '65a68f38e0fc15e108430503',
      title: 'ผัดไท',
      desc: 'พิเศษ 10',
      prices: [ 40 ],
      category: 'เส้น',
      img: 'http://res.cloudinary.com/dp5whpvw0/image/upload/v1705414454/food-ordering/gkdamv6qjgp9gvnevjdn.jpg',
      extraOptions: [ [Object] ],
      createdAt: '2024-01-16T14:14:16.573Z',
      updatedAt: '2024-01-16T14:14:16.573Z',
      __v: 0
    },
    {
      _id: '65b857c80ba6e2a4db11271d',
      title: 'BURGER',
      desc: 'Buffalo Chicken Burger',
      prices: [ 5 ],
      category: 'ผัด',
      img: 'http://res.cloudinary.com/dp5whpvw0/image/upload/v1706579917/food-ordering/ygok5bbin6hpiductdwq.jpg',
      extraOptions: [],
      createdAt: '2024-01-30T01:58:32.594Z',
      updatedAt: '2024-01-30T01:58:32.594Z',
      __v: 0
    },
    {
      _id: '65b858250ba6e2a4db112735',
      title: 'BUFFALO CHK',
      desc: 'BUFFALO CHK BURGER',
      prices: [ 24 ],
      category: 'burger',
      img: 'http://res.cloudinary.com/dp5whpvw0/image/upload/v1706580010/food-ordering/l3uecx6udjtbekxonjo5.jpg',
      extraOptions: [ [Object] ],
      createdAt: '2024-01-30T02:00:05.842Z',
      updatedAt: '2024-01-30T02:00:05.842Z',
      __v: 0
    }
  ]

  console.log(res);
  return {
    props: {
      categoryList: res.data ? res.data : [],
      productList: product.data ? product.data : [],
      // productList: JSON.stringify(products),
    },
  };
};
