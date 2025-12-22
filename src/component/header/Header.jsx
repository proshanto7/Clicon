import Container from "../common/Container";
import Button from "../ui/Button";
import logo from "../../assets/images/logo.png";

import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaReddit,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowDown, IoMdHelpCircleOutline } from "react-icons/io";
import { LuMapPin, LuGitCompareArrows, LuPhoneCall } from "react-icons/lu";
import { AiOutlineCustomerService } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import Image from "../ui/Image";
import { useState } from "react";
import { categoryList } from "../category/Category";

function Header() {
  const [isOn, setIsOn] = useState(true);
  const handleBlackFriday = () => {
    setIsOn(!isOn);
  };

  return (
    <header>
      {isOn && (
        <div className="bg-primaryBlack py-2 relative ">
          <Container>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2 transform-flat">
                <button className="bg-discount text-[20px] font-semibold px-2 leading-7 capitalize cursor-pointer rotate-[-8deg] ">
                  black
                </button>

                <h1 className="font-semibold text-white text-[24px]">Friday</h1>
              </div>

              <div className="flex gap-1 items-center text-white">
                <span className="text-[14px] font-medium">Up to</span>
                <h2 className="text-warning text-[40px] font-semibold  ">
                  59%
                </h2>
                <span className="text-white text-[20px]">OFF</span>
              </div>

              <Button
                title="Shop now"
                className="bg-warning hover:bg-primaryOrenge duration-300"
              />
            </div>
          </Container>

          <button
            onClick={handleBlackFriday}
            className=" text-white text-2xl absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer"
          >
            <MdOutlineCancel />
          </button>
        </div>
      )}

      <div className="bg-primary py-3 border-b  border-gray-300/20">
        <Container>
          <div className="flex justify-between items-center text-white">
            <p className="text-[14px] ">
              Welcome to Clicon online eCommerce store.
            </p>

            <div className="flex gap-3 items-center">
              <p className="capitalize text-[14px]">follow us</p>
              <ul className="flex items-center gap-3">
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPinterest />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaReddit />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <nav>
        <div className="bg-primary py-5">
          <Container>
            <div className="flex justify-between items-center">
              <a href="#">
                <Image imgUrl={logo} alt="logo" />
              </a>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="px-5 py-3.5 bg-white w-161.5  rounded-xs"
                />

                <button className="cursor-pointer absolute right-5 top-[50%] translate-y-[-50%] text-gray-500/90 hover:text-primaryOrenge duration-300">
                  <FaMagnifyingGlass className=" " />
                </button>
              </div>

              <div>
                <ul className="flex gap-6 items-center text-[32px] text-white">
                  <li>
                    <a href="#">
                      <CiShoppingCart />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <CiHeart />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiOutlineUser />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        <div className="bg-white py-4 border-b border-dotted border-gray-500/50">
          <Container>
            <div className="flex items-center justify-between ">
              <div>
                <ul className="flex items-center gap-0">
                  <li className="dropDown relative flex items-center gap-2 text-[14px] text-[#5F6C72] px-6 py-3.5 hover:text-textColor hover:bg-[#F2F4F5] duration-300 rounded-xs cursor-pointer ">
                    <span>All Category</span>
                    <IoIosArrowDown />

                    <div className="dropDownList absolute">
                      <ul>
                        {categoryList.map((item) => (
                          <li className="border border-textColor/20 hover:text-white duration-300 hover:bg-primaryOrenge p-2 mb-2 text-textColor font-semibold ">
                            {item.categoryName}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>

                  <li className="flex items-center gap-2 text-[14px] text-[#5F6C72] px-6 py-3.5 hover:text-textColor hover:bg-[#F2F4F5] duration-300 rounded-xs cursor-pointer">
                  
                    <LuMapPin />
                    <span>Track Order</span>
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-[#5F6C72] px-6 py-3.5 hover:text-textColor hover:bg-[#F2F4F5] duration-300 rounded-xs cursor-pointer">
                    <LuGitCompareArrows />
                    <span>Compare</span>
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-[#5F6C72] px-6 py-3.5 hover:text-textColor hover:bg-[#F2F4F5] duration-300 rounded-xs cursor-pointer">
                    <AiOutlineCustomerService />
                    <span>Customer Support</span>
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-[#5F6C72] px-6 py-3.5 hover:text-textColor hover:bg-[#F2F4F5] duration-300 rounded-xs cursor-pointer">
                    <IoMdHelpCircleOutline />
                    <span>Need Help</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-2">
                <LuPhoneCall />
                <p>+1-202-555-0104</p>
              </div>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
}

export default Header;
