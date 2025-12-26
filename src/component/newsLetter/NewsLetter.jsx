import React from "react";
import Container from "../common/Container";
import Button from "../ui/Button";
import samsungImg from "../../assets/images/company/samsung.png";
import googleImg from "../../assets/images/company/google.png";
import toshibaImg from "../../assets/images/company/toshiba.png";
import philipsImg from "../../assets/images/company/philips.png";
import amazonImg from "../../assets/images/company/amazon.png";
import Image from "../ui/Image";

function NewsLetter() {
  const company = [
    {
      id: 1,
      img: samsungImg,
    },
    {
      id: 2,
      img: googleImg,
    },
    {
      id: 3,
      img: toshibaImg,
    },
    {
      id: 4,
      img: amazonImg,
    },
    {
      id: 5,
      img: philipsImg,
    },
  ];

  return (
    <section className="bg-primary text-center py-18">
      <Container>
        <div>
          <h2 className="text-[32px] font-semibold text-white leading-10 mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="max-w-134 pb-8 font-normal text-white text-[16px] mx-auto">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          <div className="relative  max-w-156 mx-auto">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full bg-white px-4 py-5 text-[16px] rounded-sm"
            />
            <Button
              title="Subscribe"
              className="absolute top-[50%] translate-y-[-50%] right-3 "
            />
          </div>

          <div className="flex justify-center gap-12 items-center mt-8">


{
company.map((company) =>(


<Image imgUrl={company.img} alt="img"/>


))


}



          </div>
        </div>
      </Container>
    </section>
  );
}

export default NewsLetter;
