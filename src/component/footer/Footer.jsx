import React from "react";
import Container from "../common/Container";
import Image from "../ui/Image";
import { FaArrowRight } from "react-icons/fa6";
import Logo from "../../assets/images/flogo.png";
import appStore from "../../assets/images/appStore.png";
import playStore from "../../assets/images/playStore.png";

function Footer() {
  const topCategory = [
    {
      id: 1,
      name: "Computer & Laptop",
    },
    {
      id: 2,
      name: "SmartPhone",
    },
    {
      id: 3,
      name: "Headphone",
    },
    {
      id: 4,
      name: "Accessories",
    },
    {
      id: 5,
      name: "Camera & Photo",
    },
    {
      id: 6,
      name: "TV & Homes",
    },
    {
      id: 7,
      name: "Browse All Product",
    },
  ];
  const popularTag = [
    {
      id: 1,
      name: "Game",
    },
    {
      id: 2,
      name: "iPhone",
    },
    {
      id: 3,
      name: "TV",
    },
    {
      id: 4,
      name: "Asus Laptops",
    },
    {
      id: 5,
      name: "Macbook ",
    },
    {
      id: 6,
      name: "SSD",
    },
    {
      id: 7,
      name: "Graphics Card ",
    },
    {
      id: 8,
      name: "Power Bank ",
    },
    {
      id: 9,
      name: "Smart TV",
    },
    {
      id: 10,
      name: "Speaker",
    },
    {
      id: 11,
      name: "Tablet",
    },
    {
      id: 12,
      name: "Microwave",
    },
    {
      id: 13,
      name: "Samsung ",
    },
  ];
  const quickLinks = [
    {
      id: 1,
      name: "Shop Product",
    },
    {
      id: 2,
      name: "Shoping Cart",
    },
    {
      id: 3,
      name: "Wishlist",
    },
    {
      id: 4,
      name: "Compare",
    },
    {
      id: 5,
      name: "Track Order",
    },
    {
      id: 6,
      name: "Customer Help",
    },
    {
      id: 7,
      name: "Browse All Product",
    },
    {
      id: 8,
      name: "About Us",
    },
  ];

  return (
    <footer className="bg-textColor ">
      <Container>
        <div className="flex justify-between py-18">
          <div className="text-white w-3/12">
            <Image imgUrl={Logo} alt="logo" className="cursor-pointer" />

            <p className="text-gray-500 text-[14px] font-normal leading-5 mt-6">
              Customer Supports:
            </p>
            <p className="text-lg mb-4 mt-1 font-medium leading-6">
              (629) 555-0129
            </p>

            <p className="max-w-62 text-gray-300 font-normaltext-[16px] leading-6">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>

            <p className="text-[16px] mt-1 font-medium leading-6">
              info@kinbo.com
            </p>
          </div>

          <div className="flex gap-15 w-4/12 ">
            <div>
              <h2 className="text-[16px] font-medium leading-6 text-white uppercase mb-3">
                Top Category
              </h2>

              <ul className="text-gray-400">
                {topCategory.map((item) => (
                  <li className=" flex items-center gap-1 group text-[14px] font-medium leading-5 relative cursor-pointer mb-2 ">
                    <FaArrowRight className="absolute left-0 opacity-0 duration-700  group-hover:text-warning group-hover:opacity-100" />
                    <span className="group-hover:translate-x-5 group-hover:text-white duration-300">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[16px] font-medium leading-6 text-white uppercase mb-3">
                Top Category
              </h2>

              <ul className="text-gray-400">
                {quickLinks.map((item) => (
                  <li className=" flex items-center gap-1 group text-[14px] font-medium leading-5 relative cursor-pointer mb-2 ">
                    <FaArrowRight className="absolute left-0 opacity-0 duration-700  group-hover:text-warning group-hover:opacity-100" />
                    <span className="group-hover:translate-x-5 group-hover:text-white duration-300">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex  justify-between w-5/12">
            <div className="w-5/12">
              <h2 className="text-[16px] font-medium leading-6 text-white uppercase mb-3">
                Download APp
              </h2>

              <Image
                imgUrl={playStore}
                alt="img"
                className="cursor-pointer mb-4"
              />
              <Image imgUrl={appStore} alt="img" className="cursor-pointer" />
            </div>
            <div className="w-7/12">
              <h2 className="text-[16px] font-medium leading-6 text-white uppercase mb-3">
                Popular Tag
              </h2>

              <div className="flex gap-2 flex-wrap">
                {popularTag.map((item) => (
                  <p className="border border-white/20 inline-block font-medium text-white leading-5 text-[14px] rounded-sm cursor-pointer hover:bg-gray-800 duration-300 text-center px-3 py-1.5">
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
        <div className="border-t border-gray-200/10 py-6">
          <p className="text-[14px] font-normal text-gray-300 text-center">
            Kinbo - eCommerce Template © 2025. Design by Templatecookie modify
            by
            <a href="https://web.facebook.com/proshanto.sarker.partho/">
              Proshanto
            </a>
          </p>
        </div>
    </footer>
  );
}

export default Footer;
