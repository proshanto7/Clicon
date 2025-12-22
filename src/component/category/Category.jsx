import React from "react";
import Container from "../common/Container";
import CategoryItem from "./CategoryItem";
import laptopImg from "../../assets/images/Category/laptop.png";
import phoneImg from "../../assets/images/Category/phone.png";
import headphoneImg from "../../assets/images/Category/headphone.png";
import keybordImg from "../../assets/images/Category/keybord.png";
import cameraImg from "../../assets/images/Category/camera.png";
import tvImg from "../../assets/images/Category/tv.png";

export const categoryList = [
  {
    id: 1,
    categoryName: "Computer & Laptop",
    categoryImg: laptopImg,
  },
  {
    id: 2,
    categoryName: "SmartPhone",
    categoryImg: phoneImg,
  },
  {
    id: 3,
    categoryName: "Camera & Photo",
    categoryImg: cameraImg,
  },
  {
    id: 4,
    categoryName: "Headphones",
    categoryImg: headphoneImg,
  },
  {
    id: 5,
    categoryName: "Accessories",
    categoryImg: keybordImg,
  },
  {
    id: 6,
    categoryName: "TV & Homes",
    categoryImg: tvImg,
  },
];
function Category() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center text-[32px] text-textColor font-semibold leading-10">
          Shop with Categorys
        </h2>

        <div className="flex justify-between items-center mt-10">
          {categoryList.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Category;
