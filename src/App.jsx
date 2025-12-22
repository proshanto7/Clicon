import React from "react";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Features from "./component/features/Features";
import Category from "./component/category/Category";

function App() {
  return (
    <main className="font-publicSans">
      <Header />
      <Home />
      <Features />
      <Category/>
    </main>
  );
}

export default App;
