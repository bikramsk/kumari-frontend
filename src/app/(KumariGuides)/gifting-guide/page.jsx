import React from 'react';
import VideoPlayer from '@/components/custom/videoplayer';

const videoSources = {
    desktop: '/videos/GiftingBanner_Desk.mp4', 
    tablet: '/videos/GiftingBanner_tabs.mp4', 
    mobile: '/videos/GiftingBanner_mob.mp4', 
};

const items = [
    {
        id: 1,
        image: "/images/kumari-guides/most-gifted-by-kumaris.jpg",
        title: "GIFTS FOR EVERY OCCASION",
        description:
            "For the most loved people and occasions here are Kumari's most loved gifting options. From diamonds to gold, find something precious for precious moments.",
        links: {
            one: { label: 'birthdays', url: '/jewelry/birthday' },
            two: { label: 'anniversary', url: '/jewelry/anniversary' },
            three: { label: 'weddings', url: '/jewelry/wedding' },
        },
    },
    {
        id: 2,
        image: "/images/kumari-guides/layer-it-up.jpg",
        title: "GIFTS FOR EVERY BUDGET",
        description:
            "Delicate rings, dainty necklaces, or pretty charm bracelets that celebrate you and your loved ones. Find something for everyone here.",
        links: {
            one: { label: 'Under 10K', url: '/jewelry/gifts-under-10k' },
            two: { label: 'Under 20K', url: '/jewelry/gifts-under-20k' },
            three: { label: 'Under 30K', url: '/jewelry/gifts-under-30k' },
        },
    },
   

];

const test = [
    {
        id: 1,
        title: "MORE SMILES GUARANTEED",
        description:
            "Discover the best of Kumari’s gold and diamond jewellery for gifting. Choose from beautiful rings to shimmering danglers that will always have them grinning from ear to ear.",
        links: {
            one: { label: 'for her', url: 'jewelry/gifts-for-her' },
            two: { label: 'for him', url: '/jewelry/gifts-for-him' },
            three: { label: 'for kids', url: '/jewelry/kids' },
        },
    },
]

const GiftGuide = () => {
    return (
        <section className='text-gray-600 overflow-hidden'>
            <div className="flex flex-wrap justify-center mt-10">
                <div className="block md:hidden w-full p-4">
                    <VideoPlayer src={videoSources.mobile} />
                </div>
                <div className="hidden md:block lg:hidden w-full p-4">
                    <VideoPlayer src={videoSources.tablet} />
                </div>
                <div className="hidden lg:block w-full p-4">
                    <VideoPlayer src={videoSources.desktop} />
                </div>
            </div>

            <div className="justify-center">
                <div className="my-20 text-center">
                    <h1 className="text-4xl font-semibold mb-5">
                        <i>Colours of </i>GOLD
                    </h1>
                    <p className="mx-auto w-full mb-5">
                        Explore the various hues of gold including yellow, white, and rose
                        each offering distinct characteristics and appeal.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-between mt-10">
                {items.map((item) => (
                    <div key={item.id} className="w-full md:w-1/2 p-4">
                        <div className="rounded-lg p-4 text-gray-700">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto rounded-md"
                            />
                            <h1 className="text-3xl font-normal mt-6">{item.title}</h1>
                            <p className="mt-4 text-sm w-3/5 text-shadow">{item.description}</p>
                            <div className='flex gap-2 mt-10 flex-col text-gray-400'>
                                <a href={item.links.one.url} className="hover:underline cursor-pointer text-sm uppercase">{item.links.one.label} &gt;</a>
                                <a href={item.links.two.url} className="hover:underline cursor-pointer text-sm uppercase">{item.links.two.label} &gt;</a>
                                <a href={item.links.three.url} className="hover:underline cursor-pointer text-sm uppercase">{item.links.three.label} &gt;</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

    <div className="flex max-md:flex-col gap-8 my-12 w-full justify-center items-center">
            <div className="w-3/4 max-md:w-full max-md:p-6">
            <img
                src="/images/kumari-guides/make-statement.jpg"
                alt="Smile"
                className="h-full w-full object-cover"
            />
            </div>
            {test.map((item) => (
            <div key={item.id} className="w-1/2 max-md:w-full p-10">
            <h1 className="text-3xl max-md:text-2xl font-normal mt-6 w-full">{item.title}</h1>
                                <p className="mt-4 text-sm  text-shadow">{item.description}</p>
                                <div className='flex gap-2 mt-10 flex-col text-gray-400'>
                                    <a href={item.links.one.url} className="hover:underline cursor-pointer text-sm uppercase">{item.links.one.label} &gt;</a>
                                    <a href={item.links.two.url} className="hover:underline cursor-pointer text-sm uppercase">{item.links.two.label} &gt;</a>
                                    <a href={item.links.three.url} className="hover:underline cursor-pointer text-sm uppercase">{item.links.three.label} &gt;</a>
                                </div>
            </div>  ))}
    </div>

        </section>
     )
    }

   export default GiftGuide