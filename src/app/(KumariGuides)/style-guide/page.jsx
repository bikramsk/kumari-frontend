import React from "react";
import Carousel from "@/components/ui/styleguide-carousel";
import VideoPlayer from "@/components/custom/videoplayer";

const StyleGuide = () => {
  return (
    <section className="text-gray-600  overflow-hidden">
      <div className="mx-auto">
        <img
          alt="Jewellery style guide"
          className="w-full h-full object-cover"
          src="/images/kumari-guides/style-guide-hero-desktop.jpg"
        />
      </div>

      <div className="flex flex-col text-center justify-center my-6">
        <h1 className="sm:text-4xl text-5xl font-sm text-gray-900">
          Jewellery STYLE Guide
        </h1>
        <p className="lg:w-1/2 max-sm:w-full my-8 mx-auto leading-relaxed ">
          Found your favourite pieces but confused about how to pair them to
          match your
          <br /> personal style? Do it like a Kumari!
        </p>
      </div>

      <div className="flex items-center max-md:flex-col gap-8 mb-6 w-full">
        <div className="w-2/5 max-md:w-full">
          <img
            src="/images/kumari-guides/sg_stack.jpg"
            alt="Stake It Up"
            className="h-full object-cover"
          />
        </div>
        <div className="w-1/2 max-md:w-full ml-8 p-10">
          <Carousel />

          <div className="mt-8">
            <h1 className="text-3xl font-thin">STACK IT UP</h1>
            <p className="font-condensed mt-4 text-ellipsis ">
              Stacking necklaces is an excellent method to add depth and
              dimension to your outfit. To create a one-of-a-kind look,
              experiment with various lengths, textures, and styles. Play around
              with various metals and textures - the contrast can add an
              interesting and unexpected element to your look.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center max-md:flex-col gap-8">
        <div className="w-1/2 max-md:w-full ml-8 p-10">
          <Carousel />

          <div className="mt-8">
            <h1 className="text-3xl font-thin">SHAKE THINGS UP</h1>
            <p className="font-condensed mt-4 text-ellipsis">
              How to easily stand out with minimal effort? Find your favourite
              statement rings and colourful quirky shapes to add to the look.
              Although layering and playing are enjoyable, it is important to
              know when to stop. The statement designs can bring about the ‘less
              is more!’ into play.
            </p>
          </div>
        </div>

        <div className="w-2/5 max-md:w-full items-end ml-20 ">
          <img
            src="/images/kumari-guides/sg_shake.jpg"
            alt="Shake Things Up"
            className="h-full w-full object-cover "
          />
        </div>
      </div>

   <div className="flex items-center max-md:flex-col mt-8 gap-4">

      <div className="w-2/5 max-md:w-full ml-6">
          <VideoPlayer />
        </div>

        <div className="w-3/5 max-md:w-full ml-8 p-10">
          <div className="mt-8">
            <h1 className="text-3xl font-thin">SHOW’EM WHO YOU ARE</h1>
            <p className="font-condensed mt-4 text-ellipsis">
            Make it personal with your favourite charms, colours and themes to tell your story. The most essential thing is to trust your instincts and feel good about yourself.</p>
          </div>
        </div>

       
      </div>



    </section>
  );
};

export default StyleGuide;
