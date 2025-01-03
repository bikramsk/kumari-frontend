"use client";
import GoogleMapSection from "../../../components/GoogleMapSection";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Locater = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-4">
            <div className="w-full text-center mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Kumari Store Locator
              </h1>
            </div>
            <p className="w-full leading-relaxed text-gray-500 mb-6 text-center">
              Explore iconic jewelry, diamond engagement rings, elegant
              accessories and inspired gifts for any occasion at our flagship
              stores across the world.
            </p>
            <div className="w-full mb-12 border border-b-0"></div>
          </div>

          <div className="p-6">
            <h1
              onClick={toggleCollapse}
              className="text-2xl font-bold cursor-pointer flex items-center justify-between md:hidden"
            >
              Maharastra
              <span className="ml-2">
                {isOpen ? (
                  <ChevronUpIcon className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-gray-600" />
                )}
              </span>
            </h1>

            <div
              className={`mt-4 transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
              } md:max-h-screen md:overflow-visible max-xl:mb-36`}
            >
              <div className="flex flex-wrap justify-center mt-4">
                <div className="flex justify-center flex-wrap -m-4 ">
                  <Link href="store-locator/KAGH_SALES">
                    <div className="p-4">
                      <div className="rounded-lg">
                        <Image
                          className="h-40 w-96 object-cover object-center mb-6"
                          src="/images/store-locator/1.jpg"
                          width={365}
                          height={165}
                          alt="content"
                        />
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                          Kala Ghoda
                        </h2>
                        <p className="leading-relaxed text-base">
                          Behind Rhythm House Building, Forbes St, Kala Ghoda,
                          <br /> Fort,
                          <br />
                          Mumbai Maharashtra 400001
                          <br />
                          +91 22-46732513
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link href="store-locator/MAM_VAULT">
                    <div className="p-4">
                      <div className="rounded-lg">
                        <Image
                          className="h-40 w-96 object-cover object-center mb-6"
                          src="/images/store-locator/store-banner_1.jpg"
                          width={365}
                          height={165}
                          alt="content"
                        />
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                          Corporate Office
                        </h2>
                        <p className="leading-relaxed text-base">
                          G-Block, INS Tower, A Wing, Unit no 308-309, Bandra
                          <br />
                          Kurla Complex, Bandra East
                          <br />
                          Mumbai Maharashtra 400051
                          <br />
                          +91 22-44442424
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <GoogleMapSection />
        </div>
      </section>
    </>
  );
};

export default Locater;
