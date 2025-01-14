import React from "react";
import Carousel from "@/components/ui/styleguide-carousel";
import VideoPlayer from "@/components/custom/videoplayer";
import ReadMoreButton from "@/components/ui/readmorebutton";

const videoSources = {
  videoSrc: '/videos/sg-who-you-are.mp4', 
   
};

const StyleGuide = () => {
  const mainCarouselItems = [
    {
      id: 1,
      images: ["/images/kumari-guides/rfas0124-wh-k-r_36_1.jpg"],
    },
    {
      id: 2,
      images: ["/images/kumari-guides/rfas0121-rs-k_1_1.jpg"],
    },
    {
      id: 3,
      images: ["/images/kumari-guides/esth0090-yl-k_2_1.jpg"],
    },
    {
      id: 4,
      images: ["/images/kumari-guides/reng0013-rs-k_1_1.jpg"],
    },
  ];

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
          <Carousel cards={mainCarouselItems} slidesPerView={2} />

          <div className="mt-8">
            <h1 className="text-3xl font-normal max-md:text-center">
              STACK IT UP
            </h1>
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
        <div className="w-1/2 max-md:w-full ml-8 p-10 order-1 max-md:order-2">
          <Carousel cards={mainCarouselItems} slidesPerView={2} />
          <div className="mt-8">
            <h1 className="text-3xl font-normal max-md:text-center">
              SHAKE THINGS UP
            </h1>
            <p className="font-condensed mt-4 text-ellipsis">
              How to easily stand out with minimal effort? Find your favourite
              statement rings and colourful quirky shapes to add to the look.
              Although layering and playing are enjoyable, it is important to
              know when to stop. The statement designs can bring about the ‘less
              is more!’ into play.
            </p>
          </div>
        </div>

        <div className="w-2/5 max-md:w-full items-end ml-20 order-2 max-md:order-1">
          <img
            src="/images/kumari-guides/sg_shake.jpg"
            alt="Shake Things Up"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center max-md:flex-col mt-8 gap-4">
        <div className="w-2/5 max-md:w-full ml-6">
        <VideoPlayer src={videoSources.videoSrc} />
        </div>

        <div className="w-3/5 max-md:w-full ml-8 p-10">
          <div className="mt-8">
            <h1 className="text-3xl font-normal max-md:text-center">
              SHOW’EM WHO YOU ARE
            </h1>
            <p className="font-condensed mt-4 text-ellipsis">
              Make it personal with your favourite charms, colours and themes to
              tell your story. The most essential thing is to trust your
              instincts and feel good about yourself.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center max-md:flex-col gap-8 mt-14 w-full">
        <div className="w-2/5 max-md:w-full">
          <img
            src="/images/kumari-guides/sg_remix.jpg"
            alt="Remix It"
            className="h-full object-cover"
          />
        </div>

        <div className="w-1/2 max-md:w-full ml-8 p-10">
          <Carousel cards={mainCarouselItems} slidesPerView={2} />
          <div className="mt-8">
            <h1 className="text-3xl font-normal max-md:text-center">
              REMIX IT
            </h1>
            <p className="font-condensed mt-4 text-ellipsis ">
              Jewellery can be mixed and matched. You can combine numerous
              necklaces, bracelets, or rings to create a one-of-a-kind and
              personalised look for every occasion and time
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center max-md:flex-col gap-8 mt-14 w-full">
        <div className="w-3/5 max-md:w-full ml-8 p-10 order-1 max-md:order-2">
          <Carousel cards={mainCarouselItems} slidesPerView={2} />
          <div className="mt-8">
            <h1 className="text-3xl font-normal max-md:text-center">
              STAND OUT WITH WEARABLE WONDERS
            </h1>
            <p className="font-condensed mt-4 text-ellipsis">
              Add a pop of colour to your ensemble with colourful statement
              pieces. Don't be afraid to wear big and bold jewellery; after all,
              life is too short to fit in
            </p>
          </div>
        </div>

        <div className="w-2/5 max-md:w-full order-2 max-md:order-1">
          <img
            src="/images/kumari-guides/sg_stand_out.jpg"
            alt="Remix It"
            className="h-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center max-md:flex-col mt-14 bg-pink-600 ">
        <div className="w-2/5 max-md:w-full ml-8 p-10 text-white order-1 max-md:order-2">
          <div className="mt-8">
            <h1 className="text-5xl font-thin">
              The KUMARI <br /> JOURNAL
            </h1>
            <p className="font-condensed text-md my-4 text-ellipsis">
              This is your go-to guide for everything; whether styling for a
              casual brunch or a full-blown wedding. Find inspiration, celebrate
              extra every day and get sparkling for life's grandset moments.
            </p>
            <ReadMoreButton link="/blog" label="read more" />
          </div>
        </div>

        <div className="w-3/5 max-md:w-full order-2 max-md:order-1">
          <img
            src="/images/kumari-guides/style_journal.jpg"
            alt="Remix It"
            className="h-screen w-full object-cover"
          />
        </div>
      </div>

      <div className="relative mt-14">
        <img
          src="/images/kumari-guides/sg_have_it.jpg"
          alt="Remix It"
          className="object-cover w-full h-auto md:h-96"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center ">
          <div className="text-gray-800 bg-opacity-50 w-1/2">
            <h1 className="text-3xl font-semibold uppercase">
              So There You Have It!
            </h1>
            <p className="mt-2 text-sm w-3/4 ml-16 ">
              Make it yours with your personal touch - it can be a reflection of
              your personality, a way to tell a story, and a means of adding fun
              and excitement to your outfit every day.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto p-24">
        <h2 className="text-5xl text-center mb-6">
          <span className="italic">Shop</span>
          <br />
          BESTSELLERS
        </h2>

        <Carousel cards={mainCarouselItems} slidesPerView={3} />
      </div>
    </section>
  );
};

export default StyleGuide;
