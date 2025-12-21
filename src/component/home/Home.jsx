import Container from "../common/Container";
import Image from "../ui/Image";
import heroImg from "../../assets/images/hero/hero.png";
import phoneImg from "../../assets/images/hero/phone.png";
import Button from "../ui/Button";

function Home() {
  return (
    <section>
      <Container>
        <div className="flex gap-6">
          <div className="max-w-218 p-14 flex items-center bg-lightGray/10">
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
          <div className="max-w-106">
            <div className="bg-black flex  items-center pt-12 ps-10">
              <div>
                <h6 className="text-warning font-medium text-[14px] uppercase">
                  Summer Sales
                </h6>
                <h4 className="text-2xl font-semibold text-white leading-8 max-w-40">
                  New Google Pixel 6 Pro
                </h4>
                <Button title="shop now" className="mt-4.5 mb-8" />
              </div>

              <div className="relative">
                <Image imgUrl={phoneImg} alt="phone img" />
                <button className="discountBtn absolute -top-5 right-5 ">
                  29% off
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
