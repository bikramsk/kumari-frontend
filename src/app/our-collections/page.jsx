import React from "react";
import Link from "next/link";

const Collection = () => {
  const cards = [
    {
      id: 1,
      title: "Heart to Get",
      image: "/images/our-collections/oc-heart-to-get.jpg",
      link: "/collections/heart-to-get",
    },
    {
      id: 2,
      title: "Flower Child",
      image: "/images/our-collections/oc-flower-child.jpg",
      link: "/collections/flower-child",
    },
    {
      id: 3,
      title: "Dream Weaver",
      image: "/images/our-collections/oc-dreamweaver.jpg",
      link: "/collections/dream-weaver",
    },
    {
      id: 4,
      title: "The Name's Bond",
      image: "/images/our-collections/oc-names-bond.jpg",
      link: "/collections/the-name-s-bond",
    },
    {
      id: 5,
      title: "Royal Rebel",
      image: "/images/our-collections/oc-royal-rebel.jpg",
      link: "/collections/royal-rebel",
    },
    {
      id: 6,
      title: "Starry Eyed",
      image: "/images/our-collections/oc-starry-eyed.jpg",
      link: "/collections/starry-eyed",
    },
    {
      id: 7,
      title: "Mermaid Magic",
      image: "/images/our-collections/oc-mermaid-magic.jpg",
      link: "/collections/mermaid-magic",
    },
    {
      id: 8,
      title: "Art Of Tart",
      image: "/images/our-collections/oc-art-of-tart.jpg",
      link: "/collections/art-of-tart",
    },
    {
      id: 9,
      title: "Hues That Girl",
      image: "/images/our-collections/oc-hues-that-girl.jpg",
      link: "/collections/hues-that-girl",
    },
    {
      id: 10,
      title: "Miss Twist",
      image: "/images/our-collections/oc-miss-twist.jpg",
      link: "/collections/miss-twist",
    },
    {
      id: 11,
      title: "Pinky Promise",
      image: "/images/our-collections/oc-pinky-promise.jpg",
      link: "/collections/pinky-promise",
    },
    {
      id: 12,
      title: "Light Keeper",
      image: "/images/our-collections/oc-light-keeper.jpg",
      link: "/collections/light-keeper",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto items-center justify-center mb-20">
        <div className="text-black container mt-32 ">
          <h1 className="text-3xl font-bold text-center mb-5">
            Our COLLECTIONS
          </h1>

          <p className="text-center mx-auto max-w-2xl">
            Whether you're feeling sassy, fierce, or even just that extra bit of
            fabulous, we've got a collection that'll vibe right along with you.
            So stack 'em up, layer 'em on, and let your jewellery do the talking
            while you go extra every day. Because let's face it, your moods are
            a masterpiece, and your jewellery game should be too!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative overflow-hidden mb-20 max-md:translate-y-0 ${
              index % 2 === 1 ? "translate-y-[17rem]" : ""
            }`}
          >
            <h1 className="text-3xl uppercase mb-5">{card.title}</h1>
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-36 max-lg:left-16 max-md:left-44 max-xs:left-24 items-center justify-center text-center">
              <Link href={card.link}>
                <button className="text-white min-w-56 px-10 py-4 outline hover:outline-none hover:bg-white hover:text-black transition duration-300">
                  DISCOVER
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
