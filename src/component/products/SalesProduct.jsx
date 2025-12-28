import React from "react";
import Container from "../common/Container";
import Product from "./Product";
import webCamImg from "../../assets/images/product/webcam.png";
import phoneImg from "../../assets/images/product/phone.png";
import keybordImg from "../../assets/images/product/keybord.png";
import gameImg from "../../assets/images/product/bestSales/game.png";
import sonyPhoneImg from "../../assets/images/product/bestSales/phone.png";
import cameraImg from "../../assets/images/product/bestSales/cc.png";

function SalesProduct() {
  const fleshSales = [
    {
      id: 1,
      img: webCamImg,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: 1500,
    },
    {
      id: 2,
      img: phoneImg,
      title: "Simple Mobile 4G LTE Prepaid Smartphone",
      price: 1500,
    },
    {
      id: 3,
      img: keybordImg,
      title: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 1500,
    },
  ];
  const BestSales = [
    {
      id: 1,
      img: gameImg,
      title: "Samsung Electronics Samsung Galexy S21 5G",
      price: 1500,
    },
    {
      id: 2,
      img: sonyPhoneImg,
      title: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
      price: 1500,
    },
    {
      id: 3,
      img: cameraImg,
      title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      price: 1500,
    },
  ];

  return (
    <section className="py-18">
      <Container>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <h2 className="font-semibold text-[16px] text-textColor mb-4">
              FLASH SALE TODAY
            </h2>

            {fleshSales.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
          <div>
            <h2 className="font-semibold text-[16px] text-textColor mb-4">
              BEST SELLERS
            </h2>

            {BestSales.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>

          <div>
            <h2 className="font-semibold text-[16px] text-textColor mb-4">
              TOP RATED
            </h2>

            {fleshSales.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>

          <div>
            <h2 className="font-semibold text-[16px] text-textColor mb-4">
              NEW ARRIVAL
            </h2>

            {BestSales.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SalesProduct;
