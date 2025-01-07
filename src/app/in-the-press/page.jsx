import React from "react";
import Image from "next/image";
import TestimonialSlider from "@/components/ui/testimonials-slider";

const testimonials = [
  {
    imgSrc: "/images/in-the-press/ashna.jpg",
    name: "Ashna Chand",
    date: "Feburary 2024",
    role: "Fashion and Lifestyle Influencer",
    url:"http://www.instagram.com/reel/C3MyW95pgWJ/?igsh=NTFlNTRja2ducnM2",
  },
  {
    imgSrc: "/images/in-the-press/dhriti.jpg",
    name: "Dhriti Mehra",
    date: "Feburary 2024",
    role: "Fashion and Lifestyle Influencer",
    url:"http://www.instagram.com/reel/C3NvNAZxZA3/?igsh=MTdxaTF6NG0wc2F2bA",
  },
  {
    imgSrc: "/images/in-the-press/kritika.jpg",
    name: "Kritika Khurana",
    date: "Feburary 2014",
    role: "Fashion Influencer",
    url:"http://www.instagram.com/reel/C3NmrMSta-P/?igsh=MXVxb2p0OTRxeWhlMw",
  },
  {
    imgSrc: "/images/in-the-press/yashashree.jpg",
    name: "Yashashree Rao",
    date: "Feburary 2014",
    role: "Digital Creator",
    url:"http://www.instagram.com/reel/C3LHY4ORRwJ/?igsh=Z29vOW02eXVnd3gz",
  },
];

const InthePress = () => {
  return (
    <section className=" container mx-auto">
      <div className="container py-24 mx-auto">
        <h1 className="text-5xl font-medium title-font text-gray-500 mb-12 text-center uppercase">
          In The Press
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="md:w-1/2 w-full">
            <div className="h-full p-8">
              <Image
                src="/images/in-the-press/km_vouge.jpg"
                width={500}
                height={500}
                className="mt-24 object-cover"
                alt="vogue"
              />
              <div className="mt-4">
                <h3 className="text-gray-900 text-lg font-medium ">
                  VOGUE INDIA
                </h3>
                <h2 className="text-gray-500 text-sm font-bold mb-1">
                  February 2024
                </h2>
                <p className="text-gray-500 mt-1 ">
                  Discover jewellery that makes every Valentine's Day better
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-1/2 w-full">
            <div className="h-full ml-8">
              <Image
                src="/images/in-the-press/km_vogue_2.jpg"
                width={500}
                height={500}
                className="flex-shrink-0 object-cover"
                alt="vogue"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row mb-8">
        <div className="flex items-center justify-center">
          <img
            src="/images/in-the-press/km_bombay_times.jpg"
            alt="bombay times"
            width={900}
            height={542}
            className="object-cover h-auto"
          />
        </div>

        <div className="md:relative p-4 order-1  w-1/5 max-lg:w-2/3">
          <div className="md:absolute bottom-6">
            <h3 className="text-gray-900 text-lg font-medium uppercase">
              Bombay Times
            </h3>
            <h2 className="text-gray-400 text-lg font-semibold mb-1">
              February 2024
            </h2>
            <p className="text-gray-700 mt-1 text-sm font-normal">
              Celebrating love in a different way
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row mb-8">
        <div className="md:relative p-4 order-1 max-md:order-2 w-1/5 max-lg:w-2/3">
          <div className="md:absolute bottom-6 ">
            <h3 className="text-gray-900 text-lg font-medium uppercase">
              Times of India
            </h3>
            <h2 className="text-gray-400 text-lg font-semibold mb-1">
              July 2024
            </h2>
            <p className="text-gray-700 mt-1 text-sm font-normal">
              Kumari Jewels expert exlpains shift towards simplicity in
              jewellery market
            </p>
          </div>
        </div>

        <div className=" p-4 order-2 max-md:order-1">
          <img
            src="/images/in-the-press/TOI-July-24.jpg"
            alt="bombay times"
            width={942}
            height={637}
            className="object-cover h-auto"
          />
        </div>
      </div>

      <div className="container mx-auto mb-8">
        <div className="flex flex-wrap -m-4">
          <div className="md:w-1/2 w-full">
            <div className="h-full p-8">
              <Image
                src="/images/in-the-press/FE-July-24.jpg"
                width={540}
                height={674}
                className="object-cover"
                alt="financial express"
              />
              <div className="mt-4">
                <h3 className="text-gray-900 text-lg font-medium ">
                  FINANCIAL EXPRESS
                </h3>
                <h2 className="text-gray-500 text-sm font-bold mb-1">
                  July 2024
                </h2>
                <p className="text-gray-500 mt-1">
                  Kumari Jewels unveils new collection at Windsor Polo Club in
                  London
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-1/2 w-full">
            <div className="h-full ml-4 max-sm:ml-0">
              <Image
                src="/images/in-the-press/DNA-india.jpg"
                width={540}
                height={416}
                className="mt-24 max-sm:mt-2 w-full object-cover"
                alt="DNA India"
              />
              <div className="mt-4">
                <h3 className="text-gray-900 text-lg font-medium">DNA INDIA</h3>
                <h2 className="text-gray-500 text-sm font-bold mb-1">
                  February 2024
                </h2>
                <p className="text-gray-500 mt-1">
                  London Welcomes Kumari Jewels: A dazzling debut by Mr Yash
                  Kataria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row mb-8">
        <div className="flex items-center justify-center">
          <img
            src="/images/in-the-press/ITT-july-24.jpg"
            alt="bombay times"
            width={900}
            height={542}
            className="object-cover h-auto"
          />
        </div>

        <div className="md:relative p-4 order-1 w-1/5 max-lg:w-2/3">
          <div className="md:absolute bottom-6">
            <h3 className="text-gray-900 text-lg font-medium uppercase">
              India Today Times
            </h3>
            <h2 className="text-gray-400 text-lg font-semibold mb-1">
              July 2024
            </h2>
            <p className="text-gray-700 mt-1 text-sm font-normal">
              Kumari Fine Jewellery Launches in London, Co-Founded by Mr. Yash
              Kataria
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="p-4">
          <img
            src="/images/in-the-press/AM-sep-24.jpg"
            alt="Ahmedabad Mirror"
            width={900}
            height={542}
            className="object-cover h-auto mx-auto"
          />
          <h3 className="text-gray-900 text-lg font-medium uppercase ">
            Ahmedabad Mirror
          </h3>
          <h2 className="text-gray-400 text-lg font-normal mb-1 ">
            September 2024
          </h2>
          <p className="text-gray-700 mt-1 text-sm font-normal">
            Kumari Fine Jewellery Launches in London, Co-Founded by Mr. Yash
            Kataria
          </p>
        </div>
      </div>

      <div className="mx-2 mb-0 text-gray-700">
        <h1 className="uppercase max-xl:ml-0  ml-20 text-2xl font-bold">
          As Seen On Instagram
        </h1>

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default InthePress;
