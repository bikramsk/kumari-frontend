"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import GoogleMapSection from "../../../components/GoogleMapSection";

const CarouselData = [
  {
    id: 1,
    image: "/images/store-locator/store/1.jpg",
  },
  {
    id: 2,
    image: "/images/store-locator/store/2.jpg",
  },
  {
    id: 3,
    image: "/images/store-locator/store/3.jpg",
  },
];

const kaghSales = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) =>
        prev === CarouselData.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) =>
        prev === 0 ? CarouselData.length - 1 : prev - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleDotClick = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }

    const selectedStore = e.target.value;
    setStore(selectedStore);

    if (selectedStore === "store1") {
      window.location.href = "/store-locator/KAGH_SALES";
    } else if (selectedStore === "store2") {
      window.location.href = "/store-locator/MUM_VAULT";
    }
  };

  const [country, setCountry] = useState("");
  const [store, setStore] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setStore("");
  };

  const handleStoreChange = (e) => {
    const selectedStore = e.target.value;
    setStore(selectedStore);

    if (selectedStore === "store1") {
      window.location.href = "/store-locator/KAGH_SALES";
    } else if (selectedStore === "store2") {
      window.location.href = "/store-locator/MUM_VAULT";
    }
  };

  return (
    <section className="text-gray-900">
      <div className="container py-6 mx-auto">
        <div className="flex flex-wrap w-full mb-2">
          <div className="w-full text-center mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
              Kala Ghoda
            </h1>
          </div>
          <p className="w-full leading-relaxed text-gray-500 mt-4 text-center">
            Behind Rhythm House Building, Forbes St, Kala Ghoda, Fort,
            <br />
            Mumbai Maharashtra India 400001.
          </p>
          <div className="flex w-full mb-12 text-center justify-center">
            <h1 className="text-md font-medium mx-1">Get Direction</h1>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto h-[500px] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {CarouselData.map((slide) => (
              <div key={slide.id} className="w-full h-full flex-shrink-0">
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-md"
                    onError={(e) => {
                      e.target.src = "";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div>
          <div className="absolute mt-2 left-1/2 -translate-x-1/2 flex space-x-2 ">
            {CarouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-slate-500"
                    : "bg-slate-300 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-wrap py-8 mx-auto items-center ">
        <div className=" flex flex-col md:w-1/2 ml-16">
          <h2 className="font-bold text-gray-800 text-xl mb-5">Store Hours</h2>
          <div className="flex flex-wrap list-none -mb-1 ">
            <li className="max-lg:w-1/3 max-md:w-1/2 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 2, Today</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600  hover:text-gray-800">
                11:00 am - 8:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 3, Fri</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
                11:00 am - 8:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 4, Sat</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
                11:00 am - 8:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 5, Sun</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
                11:00 am - 8:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 6, Mon</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
                11:00 am - 8:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 7, Tue</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
                11:00 am - 8:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 8, Wed</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
                11:00 am - 8:00 pm
              </a>
            </li>
          </div>

          <div className="mt-6">
            <Link href="/store-locator/KAGH_SALES">Explore Store Designs⟶</Link>
          </div>
        </div>
      </div>

      <GoogleMapSection />

      <div className="container mt-16">
        <div className="w-full text-center mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
            Find a store
          </h1>
        </div>

        <div className="flex items-center justify-center ">
          <form className="bg-white p-4 rounded flex space-x-4">
            <div>
              <select
                value={country}
                onChange={handleCountryChange}
                className="block w-full p-2 border border-gray-300 rounded"
              >
                <option value="">-- Select a Country --</option>
                <option value="india">India</option>
              </select>
            </div>

            <div>
              <select
                value={store}
                onChange={handleStoreChange}
                className="block w-full p-2 border border-gray-300 rounded"
                disabled={!country}
              >
                <option value="">-- Select a Store --</option>
                {country === "india" && (
                  <>
                    <option value="store1">Kala Ghoda</option>
                    <option value="store2">Corporate Office</option>
                  </>
                )}
              </select>
            </div>
          </form>
        </div>

        <div className="w-full text-center mb-6 lg:mb-0">
          <Link href="/store-locator">
            <h1 className=" text-lg mb-2 text-gray-900">View all stores⟶</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default kaghSales;
