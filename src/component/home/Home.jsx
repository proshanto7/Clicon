import Container from "../common/Container";
import Image from "../ui/Image";
import heroImg from "../../assets/images/hero/hero.png";
import phoneImg from "../../assets/images/hero/phone.png";
import airPodImg from "../../assets/images/hero/airPod.png";
import Button from "../ui/Button";

function Home() {
  return (
    <section className="my-6">
      <Container>
        <div className="flex justify-between ">
          <div className="max-w-218 p-14 flex items-center bg-[#F2F4F5] rounded-md">
            <div>
              <h5 className="text-primary text-[14px] font-semibold leading-5">
                THE BEST PLACE TO PLAY
              </h5>
              <h3 className="text-5xl text-black font-semibold leading-14 mb-2">
                Xbox Consoles
              </h3>
              <p className="text-lg leading-6 max-w-89 text-lightGray ">
                Save up to 50% on select Xbox games. Get 3 months of PC Game
                Pass for $2 USD.
              </p>
            </div>

            <div className="relative">
              <Image imgUrl={heroImg} alt="hero img" />

              <strong className="bg-primary text-[22px] font-semibold text-white px-5 py-8.5 rounded-full absolute top-0 right-0">
                $299
              </strong>
            </div>
          </div>
          <div className="max-w-140">
            <div className="bg-black flex  items-center pt-12 ps-10 rounded-md">
              <div>
                <h6 className="text-warning font-medium text-[14px] uppercase">
                  Summer Sales
                </h6>
                <h4 className="text-2xl font-semibold text-white leading-8 max-w-40">
                  New Google Pixel 6 Pro
                </h4>
                <Button title="shop now" className="mt-4.5 mb-12 text-white" />
              </div>

              <div className="relative">
                <Image imgUrl={phoneImg} alt="phone img" />
                <button className="discountBtn absolute -top-5 right-5 ">
                  29% off
                </button>
              </div>
            </div>

            <div className="bg-[#F2F4F5] flex gap-5 items-center p-10 mt-6 rounded-md">
              <div>
                <Image imgUrl={airPodImg} alt="airpod img" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold leading-8 text-black/90 max-w-43 mb-6">
                  Xiaomi FlipBuds Pro
                </h3>
                <strong className="text-lg text-primary leading-6 font-semibold">
                  $299 USD
                </strong>
                <Button title="Shop now" className="text-white mt-5" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
