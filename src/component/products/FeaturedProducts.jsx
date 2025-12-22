import React from "react";
import Container from "../common/Container";
import Button from "../ui/Button";
import Image from "../ui/Image";
import disImg from "../../assets/images/products/discount.png";
import List from "../ui/List";
import { FiArrowRight } from "react-icons/fi";
import Products from "./Products";

function FeaturedProducts() {
  const productCatagory = [
    {
      id: 1,
      name: "All Product",
    },
    {
      id: 2,
      name: "Smart Phone",
    },
    {
      id: 3,
      name: "Laptop",
    },
    {
      id: 4,
      name: "Headphone",
    },
    {
      id: 5,
      name: "TV",
    },
  ];

  return (
    <section>
      <Container>
        <div className="flex justify-between gap-6">
          <div className="max-w-78 bg-[#F3DE6D]  ">
            <div className="pt-8 px-4.5">
              <div className="text-center">
                <h6 className="text-[14px] font-semibold leading-5 text-[#BE4646] mb-2">
                  COMPUTER & ACCESSORIES
                </h6>
                <h4 className="text-textColor text-[32px] font-semibold leading-10 mb-3 ">
                  32% Discount
                </h4>
                <p className="text-gray-700 text-[16px] font-normal leading-6 ">
                  For all ellectronics products
                </p>
              </div>

              <div className="flex gap-2 items-center mt-4">
                <p className="text-[14px] font-medium text-textColor leading-5">
                  Offers ends in:
                </p>
                <p className="text-[14px] font-semibold text-textColor bg-white leading-5 py-1.5 px-3">
                  ENDS OF CHRISTMAS
                </p>
              </div>

              <Button title="shop now" className="mx-auto text-white mt-8" />
            </div>
            <div>
              <Image imgUrl={disImg} alt="img" />
            </div>
          </div>

          <div className="w-full ">
            <div className="w-full flex items-center justify-between ">
              <div>
                <h4 className="text-2xl font-semibold text-textColor leading-8">
                  Featured Products
                </h4>
              </div>

              <div>
                <ul className="flex items-center gap-0">
                  {productCatagory.map((item) => (
                    <List
                      item={item}
                      key={item.id}
                      className="fCategory p-2 text-[14px] font-normal leading-5 text-gray-600 relative cursor-pointer hover:text-textColor hover:font-semibold duration-300"
                    />
                  ))}

                  <li className=" flex items-center gap-2 p-2 text-[14px] font-normal leading-5 text-gray-600 relative cursor-pointer hover:text-primaryOrenge hover:font-semibold duration-300">
                    Browse All Product <FiArrowRight />{" "}
                  </li>
                </ul>
              </div>
            </div>

<div>




<Products/>


</div>




          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;
