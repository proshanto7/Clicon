import Container from "../common/Container";
import Button from "../ui/Button";
import appleImg from "../../assets/images/banner/appleH.png";
import phoneImg from "../../assets/images/banner/xaiomi.png";
import Image from "../ui/Image";

function Banner() {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-full flex justify-between items-center bg-gray-100 p-2 lg:p-11 rounded-sm">
            <div>
              <strong className="text-[14px] font-semibold leading-5.5 px-3 py-1 bg-primary rounded-xs text-white">
                INTRODUCING
              </strong>
              <h2 className="md:max-w-70 text-2xl lg:text-[32px] font-semibold text-textColor lg:leading-10 my-3">
                New Apple Homepod Mini
              </h2>
              <p className="text-gray-700 leading-6 text-[14px] md:text-[16px] max-w-70 mb-5">
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </p>

              <Button title="shop now" className="text-white" />
            </div>
            <div>
              <Image imgUrl={appleImg} alt="image" />
            </div>
          </div>

          <div className=" h-full flex justify-between items-center  bg-textColor p-2 lg:pb-0 lg:px-11 lg:pt-11 rounded-sm">
            <div className="lg:pb-11">
              <strong className="sm:text-[14px] text-[12px] font-semibold leading-5.5 px-3 py-1 bg-warning rounded-xs mb-2 text-black">
                INTRODUCING NEW
              </strong>
              <h2 className="max-w-70 text-2xl lg:text-[32px] font-semibold text-white lg:leading-10 my-3">
                Xiaomi Mi 11 Ultra 12GB+256GB
              </h2>
              <p className="text-gray-700 leading-6 text-[14px] md:text-[16px] max-w-70 mb-5">
                *Data provided by internal laboratories. Industry measurment.
              </p>

              <Button title="shop now" className="text-white" />
            </div>

            <div className="relative">
              <Image imgUrl={phoneImg} alt="image" />
              <strong className="bg-primary text-lg md:text-[22px] font-semibold text-white px-2 py-4.5 lg:px-5 lg:py-8.5 rounded-full absolute top-0 right-0">
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
