import React from "react";
import Carousel from "@/components/ui/testimonials-slider";

const sizeGuide = () => {
  const mainCarouselItems = [
    {
      id: 1,
      images: ["/images/kumari-guides/km-styleguide-1.jpg"],
    },
    {
      id: 2,
      images: ["/images/kumari-guides/km-styleguide-2.jpg"],
    },
  ];

  return (
    <section className="text-gray-600 overflow-hidden">
      <div className="mt-1">
        <div className="relative max-md:w-full">
          {/* Image for larger screens */}
          <img
            src="/images/kumari-guides/sg-hero.jpg" // Original image for medium and larger screens
            alt="hero banner"
            className="w-full object-cover max-md:hidden"
          />
          {/* Image for small screens */}
          <img
            src="/images/kumari-guides/size-guide-mob.jpg"
            alt="Demo Image"
            className="w-full object-cover max-md:block hidden"
          />
        </div>

        {/* For larger screens */}
        <div className="absolute top-1/2 right-2/3 transform -translate-y-1/2 ml-24 text-white max-md:hidden max-xl:top-40">
          <h1 className="text-6xl font-thin uppercase ">
            find your <br /> <span className="lowercase">perfect</span> fit
          </h1>
        </div>

        {/* For small screens */}
        <div className="hidden max-md:block bg-pink-600 p-4 text-white z-10">
          <h1 className="text-3xl font-thin uppercase text-center">
            find your <br /> <span className="lowercase">perfect</span> fit
          </h1>
        </div>
      </div>
      <div className="mx-auto my-16 ">
        <h1 className="text-4xl font-semibold text-center mb-5">
          Jewellery Size Guide
        </h1>

        <p className="text-center mx-auto max-w-2xl mb-7 text">
          Us Kumaris know that one size doesn’t fit all. Getting the right size
          isn't just about avoiding pinches; it's about showcasing your vibe.{" "}
          <a
            href="/jewelry/rings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600"
          >
            Rings
          </a>{" "}
          that make a statement,{" "}
          <a
            href="/jewelry/pendants-necklaces"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600"
          >
            necklaces
          </a>{" "}
          that hug your neckline – that's where the magic happens. It's like
          finding the perfect emoji for your texts – it adds that extra oomph!
          So, rock your style confidently with pieces that fit like a glove.
        </p>
      </div>

      <div className="flex items-center max-md:flex-col mt-14 bg-pink-600">
        <div className="w-1/2 max-md:w-full">
          <img
            src="/images/kumari-guides/kumari-chain-size-guide.jpg"
            alt="Chain Size Guide"
            className=" w-full object-cover"
          />
        </div>
        <div className="w-1/2 max-md:w-full ml-8 p-4 text-white ">
          <div className="mt-8">
            <h1 className="text-4xl font-thin max-sm:text-center">
              CHAIN SIZE GUIDE
            </h1>
            <p className="font-condensed text-md my-4 text-ellipsis">
              Finding the ideal chain length for your necklace is as important
              as choosing the right style. Whether you're rocking a choker or
              letting your pendant make a statement, we've got you covered. Use
              our easy-to-follow size guide to find your perfect fit.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center max-md:flex-col mt-14 max-md:mt-0 ">
        <div className="w-1/2 max-md:w-full ml-8 p-10 text-black order-1 max-md:order-2">
          <div className="mt-8 max-md:text-center">
            <span className="font-semibold">Measure an Existing Chain:</span>
            <p className="font-condensed text-sm my-2 text-ellipsis">
              If you already have a chain that fits well, simply measure its
              length with a ruler. This will give you a good indication of the
              size you need
            </p>
            <span className="font-semibold">Use a Piece of String:</span>
            <p className="font-condensed text-sm my-2 text-ellipsis">
              If you don't have a chain to measure, you can use a piece of
              string or ribbon. Wrap it around your neck at the desired length
              and mark where it meets. Then, measure the length of the string to
              determine your chain size.
              <br /> Remember, chain sizes can vary depending on personal
              preference and the style of the necklace. Be sure to consider
              factors such as pendant size and the desired length when choosing
              your chain.
            </p>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full order-2 max-md:order-1 ">
          <img
            src="/images/kumari-guides/sg-v2-chain-size.jpg"
            alt="Chain Size"
            className=" w-full object-cover"
          />
        </div>
      </div>

      <div className="w-full flex mt-14 flex-col md:flex-row">
        <div className="md:w-[70%] w-full">
          <Carousel cards={mainCarouselItems} slidesPerView={1} />
        </div>
        <div className="w-full md:w-[30%] p-4">
          <div className="overflow-x-auto">
            <table className="w-full mx-auto border border-gray-900 text-center">
              <thead>
                <tr>
                  <th className="border border-gray-900 p-4 uppercase">
                    Centimeters
                  </th>
                  <th className="border border-gray-900 p-4 uppercase">
                    inches
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-900 p-4">30 cm</td>
                  <td className="border border-gray-900 p-4">12”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">36 cm</td>
                  <td className="border border-gray-900 p-4">14”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">41 cm</td>
                  <td className="border border-gray-900 p-4">16”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">46 cm</td>
                  <td className="border border-gray-900 p-4">18”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">51 cm</td>
                  <td className="border border-gray-900 p-4">20”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">56 cm</td>
                  <td className="border border-gray-900 p-4">22”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">61 cm</td>
                  <td className="border border-gray-900 p-4">24”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">66 cm</td>
                  <td className="border border-gray-900 p-4">26”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">71 cm</td>
                  <td className="border border-gray-900 p-4">28”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">76 cm</td>
                  <td className="border border-gray-900 p-4">30”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">81 cm</td>
                  <td className="border border-gray-900 p-4">32”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">86 cm</td>
                  <td className="border border-gray-900 p-4">34”</td>
                </tr>
                <tr>
                  <td className="border border-gray-900 p-4">91 cm</td>
                  <td className="border border-gray-900 p-4">36”</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex items-center max-md:flex-col mt-14 bg-pink-600">
        <div className="w-1/2 max-md:w-full">
          <img
            src="/images/kumari-guides/ring-size-guide.jpg"
            alt="Ring Size Guide"
            className=" w-full object-cover"
          />
        </div>
        <div className="w-1/2 max-md:w-full ml-8 p-4 text-white ">
          <div className="mt-8">
            <h1 className="text-4xl font-thin max-sm:text-center">
              RING SIZE GUIDE
            </h1>
            <p className="font-condensed text-md my-4 text-ellipsis">
              Discover the key to rocking your ring game! Our easy ring size
              guide helps you find the ideal fit for every finger. From snug to
              comfy, get ready to flaunt your bling with confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center max-md:flex-col mt-14 max-md:mt-0">
        <div className="w-1/2 max-md:w-full ml-8 p-10 text-black order-1 max-md:order-2">
          <div className="mt-8 p-4">
            <span className="font-semibold text-xl">
              Measure your Finger using string:
            </span>
            <ol className="my-6">
              <li>
                1. Wrap your selected finger using a piece of string, thread, or
                ribbon.
              </li>
              <li>
                2. Make sure the string is wrapped comfortably but is not too
                tight.
              </li>
              <li>3. Compare your measurement with our sizing chart.</li>
              <li>4. Make sure to double-check for accuracy!</li>
              <li>
                5. Match this measurement with the conversion chart below to
                find the right fit.
              </li>
            </ol>

            <a href="/Kumari_Ring_Size_Guide.pdf">
              <span className="uppercase text-md">
                DOWNLOAD THE RING SIZE GUIDE HERE
              </span>
            </a>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full order-2 max-md:order-1">
          <img
            src="/images/kumari-guides/finger-size.jpg"
            alt="Finger Size Guide"
            className=" w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center max-md:flex-col mt-14 bg-pink-600">
        <div className="w-1/2 max-md:w-full">
          <img
            src="/images/kumari-guides/bracelete-size-img.jpg"
            alt="Bracelet Size Guide"
            className=" w-full object-cover"
          />
        </div>
        <div className="w-1/2 max-md:w-full ml-8 p-4 text-white ">
          <div className="mt-8">
            <h1 className="text-4xl font-thin max-sm:text-center">
              BRACELET SIZE GUIDE
            </h1>
            <p className="font-condensed text-md my-4 text-ellipsis">
              To have pretty bracelets wrapped around your wrist and appreciate
              it while having a cup of coffee or working- only Kumaris know what
              fun that is!
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center max-md:flex-col mt-14 max-md:mt-0">
        <div className="w-1/2 max-md:w-full ml-8 p-10 text-black order-1 max-md:order-2">
          <div className="mt-8">
            <span className="font-bold text-xl">
              Measure your Finger using string:
            </span>
            <ol className="my-6 w-72">
              <li className="text-sm">
                <span
                  style={{ color: "red", fontSize: "2em", marginRight: "8px" }}
                >
                  1.
                </span>{" "}
                Wrap a small strip of paper, or piece of string, around your
                wrist where you’d like to wear your new bracelet.
              </li>
              <li className="text-sm">
                <span
                  style={{ color: "red", fontSize: "2em", marginRight: "8px" }}
                >
                  2.
                </span>{" "}
                Note this length with a ruler to find your circumference.
                Falling between two sizes? We recommend sizing up if you enjoy a
                looser fit or down if you prefer a more snug style.
              </li>
            </ol>

            <a href="/Kumari_Bracelet_Size_Guide.pdf">
              <span className="uppercase text-sm font-semibold">
                DOWNLOAD THE BRACELET SIZE GUIDE HERE
              </span>
            </a>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full order-2 max-md:order-1">
          <img
            src="/images/kumari-guides/wrist-size.jpg"
            alt="Chain Size"
            className=" w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center max-md:flex-col mt-14 bg-pink-600">
        <div className="w-1/2 max-md:w-full">
          <img
            src="/images/kumari-guides/ring-size-guide.jpg"
            alt="Bangle Size Guide"
            className="w-full object-cover"
          />
        </div>
        <div className="w-1/2 max-md:w-full ml-8 p-4 text-white ">
          <div className="mt-8">
            <h1 className="text-4xl font-thin max-sm:text-center">
              BANGLE SIZE GUIDE
            </h1>
            <p className="font-condensed text-md my-4 text-ellipsis">
              Find your perfect bangle fit with our simple size guide! Measure
              your wrist or a favourite bangle for a snug or comfy fit, and
              flaunt your style effortlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center max-md:flex-col mt-14 max-md:mt-0">
        <div className="w-1/2 max-md:w-full ml-8 p-10 text-black order-1 max-md:order-2">
          <div className="mt-8">
            <span className="font-semibold">
              Measure Your Hand Circumference:
            </span>
            <p className="font-condensed text-sm my-2 text-ellipsis">
              Hold your hand outstretched with your fingers together and your
              thumb tucked in. Measure the circumference of the widest part of
              your hand, typically around the knuckles.
            </p>
            <span className="font-semibold">Use a Piece of String:</span>
            <p className="font-condensed text-sm my-2 text-ellipsis">
              Alternatively, you can use a piece of string or ribbon to measure
              the circumference of your hand. Wrap it around the widest part of
              your hand and mark where it meets. Then, measure the length of the
              string to determine your hand size.
              <br /> Once you have your hand circumference, you can refer to a
              bangle size chart to find the corresponding bangle size. Remember
              to choose a size that allows the bangle to slide over your hand
              comfortably while still fitting snugly on your wrist.
            </p>

            <a href="/Kumari_Bracelet_Bangle_Guide.pdf">
              <span className="text-red-600">
                DOWNLOAD THE BANGLE SIZE GUIDE HERE
              </span>
            </a>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full order-2 max-md:order-1">
          <img
            src="/images/kumari-guides/finger-size.jpg"
            alt="Finger Size Guide"
            className=" w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default sizeGuide;
