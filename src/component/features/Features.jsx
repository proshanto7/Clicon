import Container from "../common/Container";
import FeaturesItem from "./FeaturesItem";
import { PiPackageDuotone,PiCreditCardLight,PiTrophy  ,PiHeadphones } from "react-icons/pi";

function Features() {
  const FeaturesList = [
    {
      id: 1,
      icon: <PiPackageDuotone />,
      info1: "Fasted Delivery",
      info2: "Delivery in 24/H",
    },
    {
      id: 2,
      icon: <PiTrophy  />,
      info1: "24 Hours Return",
      info2: "100% money-back guarantee",
    },
    {
      id: 3,
      icon: <PiCreditCardLight />,
      info1: "Secure Payment",
      info2: "Your money is safe",
    },
    {
      id: 4,
      icon: <PiHeadphones  />,
      info1: "Support 24/7",
      info2: "Live contact/message",
    },
  ];

  return (
    <section>
      <Container>

        <div className="flex flex-col gap-2 sm:grid lg:gap-0 sm:grid-cols-2 lg:grid-cols-4 border border-gray-300 rounded-md">

        {FeaturesList.map((featuresItems) => (
          <FeaturesItem item={featuresItems} key={featuresItems.id} />
        ))}

        </div>
      </Container>
    </section>
  );
}

export default Features;
