import React from "react";
import Carousel from "@/components/ui/styleguide-carousel";
import ReadMoreButton from "@/components/ui/readmorebutton";

const gemStones = [
    {
      src: "/images/kumari-guides/AMETHYST01.jpg",
      title: "AMETHYST",
      description: "Express your individuality with this vibrant violet stone. It resonates with Sagittarius' adventurous spirit and represents understanding, sensitivity, and intelligence. Elevate your aura and express your authenticity."
    },
    {
        src: "/images/kumari-guides/AQUAMARINE.jpg",
        title: "AQUAMARINE",
        description: "Dive into serenity with this calming blue gem. A Pisces’ match, it enhances intuition and emotional healing. This stone symbolises youth and happiness. Embrace its soothing energy that is steeped in history and folklore.."
      },

      {
        src: "/images/kumari-guides/BLACK-ONYX.jpg",
        title: "BLACK ONYX",
        description: "Embrace the mystery of this bold black gem. A Capricorn's choice, Black Onyx offers protection and grounding. It serves as a protective stone and aids in warding off darkness. Add a touch of edgy elegance with this gemstone."
      },

      {
        src: "/images/kumari-guides/BLACK-ONYX.jpg",
        title: "BLACK ONYX",
        description: "Embrace the mystery of this bold black gem. A Capricorn's choice, Black Onyx offers protection and grounding. It serves as a protective stone and aids in warding off darkness. Add a touch of edgy elegance with this gemstone."
      },

      {
        src: "/images/kumari-guides/BLUE-TOPAZ.jpg",
        title: "BLUE TOPAZ",
        description: "Dive into tranquillity with this serene blue gem. A Sagittarius' ally, it enhances communication and self-expression. Blue Topaz encourages you to embrace your noble nature, believe in your strength, and discover your own brand of luck."
      },

      {
        src: "/images/kumari-guides/CITRINE.jpg",
        title: "CITRINE",
        description: "Bask in the sunny energy of this golden gem. A Virgo's match, it promotes positivity and abundance. Citrine is linked with positivity and optimism, which is not unexpected given its cheerful colour. It's often used to help manifest abundance of money and opportunities."
      },


      {
        src: "/images/kumari-guides/GARNET.jpg",
        title: "GARNET",
        description: "Fuel your passion with this deep red gem. An Aquarius' ally, it stimulates creativity and confidence. Its beauty is how it compliments every skin tone. Let its fiery charm elevate your style."
      },

      {
        src: "/images/kumari-guides/PERDIOT.jpg",
        title: "PERDIOT",
        description: "Channel your inner spring with this fresh green gem. A Leo's companion, it attracts positivity and abundance and denotes authority, influence, and strength. In addition to inspiring eloquence and creativity, this amiable stone also offers joy and good spirits."
      },

      {
        src: "/images/kumari-guides/RUBY.jpg",
        title: "RUBY",
        description: "Ignite your inner fire with this passionate red gem. A Cancer's favourite, it fosters confidence and vitality. A symbol of knowledge, prosperity, and love, these are treasured rarities. Diamond is the only stone that is harder than a ruby."
      },

      {
        src: "/images/kumari-guides/MULTI-SAPPHIRE.jpg",
        title: "MULTI SAPPHIRE",
        description: "Embrace the rainbow of possibilities with Sapphires that come in green, blue, pink and yellow. As the gemstone for September, they are tough and long-lasting and perfect for every day. They are referred to as the stones of tranquillity and knowledge."
      },

      {
        src: "/images/kumari-guides/TANZANITE.jpg",
        title: "TANZANITE",
        description: "Unleash your individuality with this vibrant violet stone. It resonates with Sagittarius' adventurous spirit and represents understanding, sensitivity, and intelligence. Elevate your aura and express your authenticity."
      },

      {
        src: "/images/kumari-guides/WHITE-PEARL01.jpg",
        title: "WHITE PEARL",
        description: "Classic meets modern in this timeless treasure. A symbol of purity, it complements any style effortlessly. A pearl conveys youth, chastity and mental stability and can be worn by anyone because it has no negative effects on the user."
      },

      {
        src: "/images/kumari-guides/MORGANITE.jpg",
        title: "MORGANITE",
        description: "Feel the love in shades of pink with Morganite. A Gemini’s heart resonates with its tender energy because this represents divine affection. Spark joy with this stone of compassion that represents the earliest, palest rays of dawn."
      },

      {
        src: "/images/kumari-guides/OPAL01.jpg",
        title: "OPAL STONE",
        description: "Ride the waves of creativity with this iridescent gem. Believed to have originated in India, the name is derived from the Sanskrit word ‘Upala’- a precious stone. A Libra's delight, it amplifies emotions and ignites inspiration."
      },

      {
        src: "/images/kumari-guides/MOTHER-OF-PEARL.jpg",
        title: "MOTHER OF PEARL",
        description: "Embrace elegance with this shimmering beauty. It's a Cancer's dream, enhancing intuition and calming energy. Reflect your inner radiance with its luminous charm. It serves as a reminder to prioritise self-care."
      },

      {
        src: "/images/kumari-guides/NAVRATAN-STONES01.jpg",
        title: "NAVRATAN STONES",
        description: "Navratan is a combination of ruby, diamond, Blue Sapphire, Yellow Sapphire, emerald, coral, pearl, Cat's Eye, and hessonite, each representing a celestial body in the solar system. This sacred combination brings monetary success, professional advancement, and good health."
      },

      {
        src: "/images/kumari-guides/CORAL.jpg",
        title: "CORAL STONE",
        description: "Ignite your passion with this fiery red gem. Wear it like a Leofor courage and vitality. It's a talisman for transformation, adding a pop of energy to your urban style. It represents your vitality, bravery, self-assurance, and aspirations."
      },

      {
        src: "/images/kumari-guides/TURQUOISE.jpg",
        title: "TURQUOISE",
        description: "Dive into tranquillity with this serene blue stone. It's an ancient favourite known for its protective energy. Let your bold side shine as an Aquarius, or embrace its soothing charm. It is believed to offer luck, harmony, and safety."
      },

      {
        src: "/images/kumari-guides/PINK-TOURMALINE.jpg",
        title: "PINK TOURMALINE",
        description: "Feel the power of love with this rosy gem. A favourite of Libra, it promotes compassion and self-love. Pink Tourmaline is thought to impart wisdom, strengthen one's willpower, and encourage love, spirituality, and creativity."
      },

      {
        src: "/images/kumari-guides/GREEN-ONYX.jpg",
        title: "GREEN ONYX",
        description: "Elevate your style with the Green Onyx stone that holds healing properties for all signs, enhancing communication skills and empowering your voice. It's your perfect ally for conquering presentations and social gatherings alike."
      },

  ];

const gemStoneGuide = () => {

    const carouselItems = [
        {
          id: 1,
          images: ["/images/kumari-guides/pstm0070-rs-k_1.jpg"],
        },
        {
          id: 2,
          images: ["/images/kumari-guides/pstm0070-rs-k_1.jpg"],
        },
        {
         id: 3,
        images: ["/images/kumari-guides/pstm0070-rs-k_1.jpg"],
          },
        
      ];


  return (
    <section className="text-gray-600 overflow-hidden">
      <div className="mt-1">
        <img
          src="/images/kumari-guides/gsg-hero.jpg"
          alt="Gemstone Guide"
          className="w-full object-cover"
        />
      </div>

    <div className="justify-center">

        <div className="my-14">
            <h1 className="text-4xl font-semibold text-center mb-5">
            KUMARI'S Guide <br /> to GEMSTONES
            </h1>

            <p className="text-center mx-auto max-w-2xl mb-7 text">
            Welcome to KUMARI'S guide to Gemstones! Here is your alphabetical guide to the finest gemstones that every Kumari should know of. Align with your zodiac sign or wear it for its beauty - either way, go extra every day for the quintessential Kumari touch.
            </p>
        </div>

            <div className="my-16">
                <h2 className="text-center text-4xl">Types of Gemstones
                </h2>
            </div>


    <div className="flex flex-col">
        {gemStones.map((image, index) => (
            <div key={index} className={`flex flex-col md:flex-row justify-center items-center mb-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                src={image.src}
                alt={image.title}
                className="w-56 object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-4">
                <h1 className="text-2xl font-bold">{image.title}</h1>
                <p className="mt-2 text-sm w-80">
                {image.description}
                </p>
            </div>
            </div>
        ))}
        </div>

    </div>

    <div className="flex items-center max-md:flex-col gap-8 mb-6 w-full">
        <div className="w-2/5 max-md:w-full">
          <img
            src="/images/kumari-guides/Gemstone_Banner_1200X1800.jpg"
            alt="Gemstone"
            className="h-full object-cover"
          />
        </div>
        <div className="w-1/2 max-md:w-full ml-8 p-10">
        <h1 className="text-4xl mb-4"> SHOP <i>gemstone</i> JEWELLERY</h1>
          <Carousel cards={carouselItems} slidesPerView={2} />

          <div className="flex justify-center mt-8">
                    <ReadMoreButton link="/jewelry/gemstone" label="Explore"/>
          </div>
        </div>
      </div>

    </section>
  );
};

export default gemStoneGuide;
