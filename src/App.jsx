import React from "react";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Features from "./component/features/Features";
import Category from "./component/category/Category";
import FeaturedProducts from "./component/products/FeaturedProducts";

function App() {
  return (
    <main className="font-publicSans">
      <Header />
      <Home />
      <Features />
      <Category/>
      <FeaturedProducts/>
    </main>
  );
}

export default App;
