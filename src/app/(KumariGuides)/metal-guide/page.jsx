import React from "react";
import ReadMoreButton from "@/components/ui/readmorebutton";

const items = [
  {
    id: 1,
    image: "/images/kumari-guides/mg-gold-img.jpg",
    title: "YELLOW GOLD",
    description:
      "The majority of people envision Yellow Gold when they think of gold jewellery. It has the longest history because it is the nearest in colour to pure gold. Silver and copper are alloyed with Yellow Gold. The alloy has a more intense yellow hue when the proportion of pure gold is greater.",
  },
  {
    id: 2,
    image: "/images/kumari-guides/mg-white-img.jpg",
    title: "WHITE GOLD",
    description:
      "Alloying White Gold with platinum, palladium,or nickel is common. Rhodium is occasionally applied to White Gold to improve its radiance and durability.",
  },
  {
    id: 3,
    image: "/images/kumari-guides/mg-rose-img.jpg",
    title: "ROSE GOLD",
    description:
      "Rose Gold is alloyed with copper and silver, much like Yellow Gold, but the proportion of copper to silver varies and some varieties have no silver at all. The colour of Rose Gold has changed over time, going from coppery tones to a more striking pink tint.",
  },
];

const metalGuide = () => {
  return (
    <section className="text-gray-600 overflow-hidden">
      <div className="mt-1">
        <img
          src="/images/kumari-guides/metal-hero.jpg"
          alt="Metal Guide"
          className="w-full object-cover"
        />
      </div>

      <div className="justify-center">
        <div className="my-20 text-center">
          <h1 className="text-5xl font-semibold mb-5">Gold Metal Guide:</h1>
          <h2 className="text-4xl mb-3 max-md:text-2xl">
            Know Your Precious Metal
          </h2>

          <p className="mx-auto max-w-2xl mb-5 text">
            Kumaris know their gold well! Gold jewellery is the most wearable
            investment that you can desire. That is why, we have this
            comprehensive guide to know gold and other metals to help you make
            your golden choice.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-14">
        <div className="w-full md:w-1/2">
          <img
            src="/images/kumari-guides/mg-before-buying-gold.jpg"
            alt="Gold Ring"
            className="w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 md:ml-8 my-12">
          <div className="p-2">
            <span className="font-normal text-5xl leading-snug">
              Things to Check Before Buying a Gold Jewellery
            </span>

            <div className="flex flex-col m-6">
              <div className="flex items-start p-2 mt-4 gap-2">
                <img
                  src="/images/kumari-guides/mg-icon-1.jpg"
                  alt="Purity"
                  className="w-14 h-4 mr-2 mt-2"
                />
                <div>
                  <strong>PURITY TO BE PRIORITY</strong>
                  <p className="tracking-tight">
                    The first step is to check for gold’s purity mark to
                    understand its authenticity. This mark tells you the degree
                    of purity of gold used for that piece of jewellery.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-2 mt-4 gap-4">
                <img
                  src="/images/kumari-guides/mg-icon-2.jpg"
                  alt="Cost"
                  className="w-20 h-10 mr-2 mt-2 "
                />
                <div>
                  <strong>CONSCIOUS OF COST</strong>
                  <p className="tracking-tight">
                    The karat of gold and the fluctuating market value are
                    perhaps the most relevant factors that influence its price.
                    Keep an eye out as its price changes every day.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-2 mt-4 gap-2">
                <img
                  src="/images/kumari-guides/mg-icon-3.jpg"
                  alt="Hallmark"
                  className="w-14 h-10 mr-2 mt-2"
                />
                <div>
                  <strong>HAVE AN EYE ON HALLMARK</strong>
                  <p className="tracking-tight">
                    Things to look out for on your hallmarked jewellery are: the
                    selected number with the BIS, the year of hallmark & the
                    jeweller’s mark.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-2 mt-4 gap-2">
                <img
                  src="/images/kumari-guides/mg-icon-4.jpg"
                  alt="Karat"
                  className="w-14 h-10 mr-2 mt-2"
                />
                <div>
                  <strong>CHECK FOR KARAT</strong>
                  <p className="tracking-tight">
                    Gold’s purity is measured in ‘Karats’ or ‘K’. 24K refers to
                    100% pure gold. However, it's also available in 18kt, 14kt,
                    10kt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center">
        <div className="my-20 text-center">
          <h1 className="text-4xl font-semibold mb-5">
            <i>Colours of </i>GOLD
          </h1>
          <p className="mx-auto w-full mb-5">
            Explore the various hues of gold including yellow, white, and rose
            each offering distinct characteristics and appeal.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-10">
        {items.map((item) => (
          <div key={item.id} className="w-full md:w-1/3 p-4">
            <div className="rounded-lg p-4 text-gray-700">
              <img
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
              <h1 className="text-xl font-semibold mt-4">{item.title}</h1>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center max-md:flex-col gap-8 my-14 w-full -mx-4">
        <div className="w-2/5 max-md:w-full">
          <img
            src="/images/kumari-guides/Kumari_Metal_Guide_Banner.jpg"
            alt="Gemstone"
            className="h-full object-cover"
          />
        </div>
        <div className="w-1/2 max-md:w-full ml-8 p-10 justify-center text-center">
          <h1 className="text-4xl max-md:text-2xl mb-4 ">
            {" "}
            SHOP <i>ring</i> JEWELLERY
          </h1>
          <div className="flex justify-center mt-8">
            <ReadMoreButton link="/jewelry/gold" label="Explore" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default metalGuide;
