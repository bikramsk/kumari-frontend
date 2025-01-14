import React from 'react'
import ReadMoreButton from '@/components/ui/readmorebutton';
import Carousel from "@/components/ui/styleguide-carousel";

const diamondInfo = [
    {
      src: "/images/kumari-guides/km-colour.jpg",
      title: "COLOUR",
      description: "Diamonds are graded in the colour department basedon a standardised system that runs from D (colourless) to Z (saturated). The less colour a diamond has, the moreclearly and brilliantly it shines."
    },
    {
        src: "/images/kumari-guides/km-clarity.jpg",
        title: "CLARITY",
        description: 'A diamond’s clarity is determined by measuring the size and placement of blemishes (also known as "inclusions").',
      },

      {
        src: "/images/kumari-guides/cut.jpg",
        title: "CUT",
        description: 'Less about shape and more about proportion, a cut refers to the arrangement of diamond facets. This marks the quality of craftsmanship and the amount of brilliance and fire in a diamond. As this depends on your taste, choose one that you love—there are no "better" or "worse" cuts.'
      },

      {
        src: "/images/kumari-guides/carat.jpg",
        title: "CARAT",
        description: "This refers to the weight of the diamond. It is a common assumption that the higher the carat weight, the more expensive the stone. However, diamonds of varying weight are priced based on the quality and level of craftsmanship (a combination of the three other Cs) instead of just their weight."
      },

      {
        src: "/images/kumari-guides/how-to-choose-diamond.jpg",
        title: "HOW TO CHOOSE A DIAMOND?",
        description: "Buying a diamond is largely a visual process. The diamond that speaks to you, is the right one for you. It might sound superstitious, but a diamond often chooses you, so trust your eyes, your heart and your brain."
      },

      
  ];

const diamondGuide = () => {

  const carouselItems = [
    {
      id: 1,
      images: ["/images/kumari-guides/rfas0121-rs-k_1_1.jpg"],
    },
    {
      id: 2,
      images: ["/images/kumari-guides/rfas0094-yl-k.jpg"],
    },
    {
     id: 3,
    images: ["/images/kumari-guides/rfas0121-rs-k_1_1.jpg"],
      },
    
  ];


  return (
   <section className='overflow-hidden text-gray-600 relative'>
    <div className="mt-1">
        <img
          src="/images/kumari-guides/dg-hero.jpg"
          alt="Gemstone Guide"
          className="w-full object-cover"
        />
      </div>

    <div className="justify-center">
            <div className="my-14 text-center">
                <h1 className="text-4xl font-semibold mb-5">
                DIAMONDS Guide
                </h1>
                <h2 className='text-3xl mb-2 max-md:text-2xl'>DIAMONDS ARE A KUMARI'S BFF. </h2>

                <p className="mx-auto max-w-2xl mb-5 text">
                And when choosing your bosom buds, it’s good to know their story. Here is the 4C’s guide to help you through all of that.
                </p>
            </div>
      </div>
      

    <div className="flex flex-col container mx-auto">
        {diamondInfo.map((image, index) => (
            <div key={index} className={`flex flex-col md:flex-row justify-center mx-auto container items-center  ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                src={image.src}
                alt={image.title}
                className="w-full object-cover"
                />
            </div>
          <div className="md:w-1/2 flex flex-col justify-start text-left items-left my-8 max-md:justify-center max-md:text-center max-md:items-center">
                <h1 className="text-2xl font-bold text-center ml-12 max-md:ml-2 w-96">{image.title}</h1>
                <p className="mt-2 text-md w-3/4 ml-12 max-md:w-full max-md:ml-2 ">{image.description}</p>
              </div>
            </div>
        ))}
      </div>

        <div className="flex items-center max-md:flex-col gap-8 my-14 w-full -mx-4">
          <div className="w-2/5 max-md:w-full">
            <img
              src="/images/kumari-guides/Kumari_Diamond_Guide_Banner.jpg"
              alt="Gemstone"
              className="h-full object-cover"
            />
          </div>
          <div className="w-1/2 max-md:w-full ml-8 p-10">
          <h1 className="text-4xl max-md:text-2xl mb-4"> SHOP <i>diamond</i> JEWELLERY</h1>
            <Carousel cards={carouselItems} slidesPerView={2} />

            <div className="flex justify-center mt-8">
                      <ReadMoreButton link="/jewelry/gemstone" label="Explore"/>
            </div>
          </div>
        </div>
       

      

   </section>
  )
}

export default diamondGuide