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
import Image from "../ui/Image";

function Header() {
  return (
    <header>
      <div className="bg-primaryBlack py-2">
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
              <h2 className="text-warning text-[40px] font-semibold  ">59%</h2>
              <span className="text-white text-[20px]">OFF</span>
            </div>

            <Button
              title="Shop now"
              className="bg-warning hover:bg-primaryOrenge duration-300"
            />
          </div>
        </Container>
      </div>

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

      <nav className="bg-primary py-5">
        <Container>
          <div className="flex justify-between items-center">
            <a href="#">
              <Image imgUrl={logo} alt='logo' />
            </a>

            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything..."
                className="px-5 py-3.5 bg-white w-161.5  rounded-xs"
              />

<button className="cursor-pointer absolute right-5 top-[50%] translate-y-[-50%] text-gray-500/90 hover:text-primaryOrenge duration-300">

<FaMagnifyingGlass className=" "/>
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
      </nav>
    </header>
  );
}

export default Header;
