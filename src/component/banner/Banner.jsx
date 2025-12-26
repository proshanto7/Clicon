import React from "react";
import Container from "../common/Container";
import Button from "../ui/Button";
import appleImg from "../../assets/images/banner/appleH.png";
import phoneImg from "../../assets/images/banner/xaiomi.png";
import Image from "../ui/Image";

function Banner() {
  return (
    <section>
      <Container>
        <div className="flex items-center gap-6 justify-between">
          <div className="w-2/4 flex justify-between items-center bg-gray-100 p-11 rounded-sm">
            <div>
              <strong className="text-[14px] font-semibold leading-5.5 px-3 py-1 bg-primary rounded-xs text-white">
                INTRODUCING
              </strong>
              <h2 className="max-w-70 text-[32px] font-semibold text-textColor leading-10 my-3">
                New Apple Homepod Mini
              </h2>
              <p className="text-gray-700 leading-6 text-[16px] max-w-70 mb-5">
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </p>

              <Button title="shop now" className="text-white" />
            </div>
            <div>
              <Image imgUrl={appleImg} alt="image" />
            </div>
          </div>

          <div className="w-2/4 flex justify-between items-center  bg-textColor px-11 pt-11 rounded-sm">
            <div className="pb-11">
              <strong className="text-[14px] font-semibold leading-5.5 px-3 py-1 bg-warning rounded-xs mb-2 text-black">
                INTRODUCING NEW
              </strong>
              <h2 className="max-w-70 text-[32px] font-semibold text-white leading-10 my-3">
                Xiaomi Mi 11 Ultra 12GB+256GB
              </h2>
              <p className="text-gray-700 leading-6 text-[16px] max-w-70 mb-5">
                *Data provided by internal laboratories. Industry measurment.
              </p>

              <Button title="shop now" className="text-white" />
            </div>

            <div className="relative">
              <Image imgUrl={phoneImg} alt="image" />
              <strong className="bg-primary text-[22px] font-semibold text-white px-5 py-8.5 rounded-full absolute top-0 right-0">
                $590
              </strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
