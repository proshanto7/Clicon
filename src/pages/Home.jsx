import Banner from "../component/banner/Banner";
import Category from "../component/category/Category";
import Features from "../component/features/Features";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import Hero from "../component/hero/Hero";
import NewsLetter from "../component/newsLetter/NewsLetter";
import FeaturedProducts from "../component/products/FeaturedProducts";
import SalesProduct from "../component/products/SalesProduct";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Category />
      <FeaturedProducts />
      <Banner />
      <SalesProduct />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
