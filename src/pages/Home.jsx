import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/slider/Slider";
import Trendings from "../components/Trendings";
import Features from "../components/Features";
import Ordersectionads from "../components/Ordersectionads";
import Expilation from "../components/Expilation";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Trendings />
      <Products />
      <Features />
      <Ordersectionads />
      <Expilation />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Home;
