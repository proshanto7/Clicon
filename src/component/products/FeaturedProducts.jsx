import Container from "../common/Container";
import Button from "../ui/Button";
import Image from "../ui/Image";
import disImg from "../../assets/images/products/discount.png";
import List from "../ui/List";
import { FiArrowRight } from "react-icons/fi";
import Products from "./Products";
import acImg from "../../assets/images/products/ac/ac.png";
import s23Img from "../../assets/images/products/phone/s23.png";
import phoneimg from "../../assets/images/products/phone/image.png";
import oneplusimg from "../../assets/images/products/phone/oneplus.png";
import headphoneImg from "../../assets/images/products/headphone/headphone.png";
import monitorImg from "../../assets/images/products/monitor/monitor.png";
import tvImg from "../../assets/images/products/tv/tv.png";

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

  const productList = [
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: 70,
      rating: 738,
      imgUrl: phoneimg,
    },
    {
      id: 2,
      name: "Samsung Electronics Samsung Galexy S21 5G",
      price: 2300,
      rating: 536,
      imgUrl: s23Img,
    },
    {
      id: 3,
      name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      price: 360,
      rating: 423,
      imgUrl: acImg,
    },
    {
      id: 4,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 1500,
      rating: 647,
      imgUrl: headphoneImg,
    },
    {
      id: 5,
      name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
      price: 1200,
      rating: 877,
      imgUrl: tvImg,
    },
    {
      id: 6,
      name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      price: 250,
      rating: 250,
      imgUrl: monitorImg,
    },
    {
      id: 7,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 220,
      rating: 583,
      imgUrl: oneplusimg,
    },
    {
      id: 8,
      name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
      price: 80,
      rating: 816,
      imgUrl: phoneimg,
    },
  ];

  return (
    <section className="py-9">
      <Container>
        <div className="flex justify-between gap-6">
          <div className="max-w-78 bg-[#F3DE6D] flex flex-col justify-between  ">
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

              <div className="flex gap-2 items-center  mt-4">
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

          <div className="max-w-246 ">
            <div className=" w-full flex items-center justify-between ">
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

            <div className="grid grid-cols-4 gap-4 mt-6">
              {productList.map((item) => (
                <Products item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;
