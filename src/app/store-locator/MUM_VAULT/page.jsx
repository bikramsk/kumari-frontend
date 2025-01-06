"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import GoogleMapSection from "../../../components/GoogleMapSection";


const mumVault = () => {

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
        <div className="flex flex-wrap w-full">
          <div className="w-full text-center mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
            Corporate Office
            </h1>
          </div>
          <p className="w-full leading-relaxed text-gray-500 mt-4 text-center">
          G-Block,INS Tower,A Wing, Unit no 308-309, Bandra Kurla Complex, Bandra East
            <br />
            Mumbai Maharashtra India 400051
          </p>
          <div className="flex w-full text-center justify-center">
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

       
      </div>

    
      <div className="flex h-screen p-8"> 
        <img
          src="/images/store-locator/store/store-banner_1.jpg"
          alt="Corporate Office"
          className="mx-auto object-cover rounded-lg"
        />
      </div>
  

      <div className="container flex flex-wrap py-8 mx-auto items-center ">
        <div className=" flex flex-col md:w-1/2 ml-16">
          <h2 className="font-bold text-gray-800 text-xl mb-5">Store Hours</h2>
          <div className="flex flex-wrap list-none -mb-1 ">
            <li className="max-lg:w-1/3 max-md:w-1/2 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 3, Today</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600  hover:text-gray-800">
              9:00 am - 5:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 4, Sat</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
              9:00 am - 5:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 5, Sun</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
                Closed
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 6, Mon</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
              9:00 am - 5:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 7, Tue</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
              9:00 am - 5:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 8, Wed</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
              9:00 am - 5:00 pm
              </a>
            </li>

            <li className="max-lg:w-1/3 max-md:w-1/2 mb-1 w-1/2 lg:-mr-16">
              <a className="text-gray-600 hover:text-gray-800">Jan 9, Thru</a>
            </li>
            <li className="lg:w-1/3 max-md:w-1/2 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-gray-800">
              9:00 am - 5:00 pm
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

export default mumVault;
