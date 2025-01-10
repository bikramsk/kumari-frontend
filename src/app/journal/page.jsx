import Link from 'next/link';
import BlogSlider from '@/components/ui/blogs-slider';
import ReadMoreButton from '@/components/ui/readmorebutton';

const Journal = () => {

  const blogs = [
    {
      image: "images/blogs/blog-flower.jpg",
      name: "FLOWER CHILD",
      url:"/collections/flower-child",
    },
    {
      image: "images/blogs/blog-eyed.jpg",
      name: "STARRY EYED",
      url:"/collections/starry-eyed"
    },
    {
      image: "images/blogs/blog-rebel.jpg",
      name: "ROYAL REBEL",
      url: "/collections/royal-rebel",
      },
    {
      image: "images/blogs/blog-bond.jpg",
      name: "THE NAME'S BOND",
      url:"/collections/the-name-s-bond",
     },
  ];

  const BlogCards = [
    {
      id: 1,
      title: "The Different Types of Rings For Men",
      description: "Are you a handsome hunk looking to add some flair to your everyday look? One accessory that can make a big difference in men’s jewellery is a ring. From classic to contemporary, there are various types of rings for men that every fashion-forward man should know about. Whether you prefer a timeless signet ring, a sleek and modern band, or a statement-making gemstone ring, there is something for everyone.",
      image: "/images/blogs/types_of_rings_for_men.jpg",
      url: "/blog/the-different-types-of-rings-for-men", // Updated URL to remove .html
    },
    {
      id: 2,
      title: "How to Clean Diamond Earrings",
      description: "Diamond earrings are a classic and timeless jewellery piece that instantly elevates any outfit. But just like any treasure, your diamond earrings need a little TLC to maintain their sparkle like new.",
      image: "/images/blogs/how_to_clean_your_diamond_earring.jpg",
      url: "/blog/how-to-clean-diamond-earrings-at-home",
    },
    {
      id: 3,
      title: "A Useful Guide on How to Stack Rings",
      description: "Are you looking to create a unique and fashionable look with your rings? Ring stacking is the perfect way to express your personal style and create a stunning statement. It’s in trend and compliments even the most basic outfit you wear, let alone your wedding lehenga. Now, whether you want to stack wedding rings or fashion rings, this ultimate guide will provide you with all the ring stacking ideas, tips and tricks you need to know.",
      image: "/images/blogs/how_to_stack_rings.jpg",
      url: "/blog/ring-stacking-ideas",
    },
  ];

  return (
    <section className="text-gray-600 overflow-hidden">
      <div className="container mx-auto p-6 md:p-8">
        <div className="w-full my-20">
          <h1 className="text-4xl text-center text-gray-600">The KUMARI JOURNAL</h1>
        </div>

        <div className="flex flex-col md:flex-row">
          
          <div className="w-full md:w-1/3 p-4 order-1 max-md:order-2">
            <h1 className="text-gray-900 text-3xl md:text-4xl uppercase mb-4 lg:mt-24">Your Jewellery Styling FAQs Answered</h1>
            <p className="leading-relaxed mb-4">
              Our style-savvy jewellery experts have gone through your fantastic questions and have put together your accessory dilemmas.
            </p>
            <ReadMoreButton link="/blog/everything-you-need-to-know-about-jewellery-styling" label="read more"/>
          </div>
         
          <div className="w-full md:w-2/3 order-2 max-md:order-1">
            <img alt="journal" className="w-full h-full object-cover" src="/images/blogs/blog-hero-img.jpg" />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 mt-8">
          {BlogCards.map((card, index) => (
            <div key={card.id} className={`relative w-full md:w-1/3 p-4 ${index === 1 ? 'border-l-2 border-r-2 border-gray-300' : ''}`}>
              {index === 1 ? (
                // middle card, show the image first on big screens
                <>
                <div className='max-md:flex max-md:flex-wrap-reverse'>
                  <img alt={card.title} className="w-full h-auto object-cover mb-2 " src={card.image} />
                <div>
                  <h1 className="text-3xl uppercase mb-2 ">{card.title}</h1>
                  <p className='text-sm mb-2'>{card.description}</p>
                  {card.url && (
                    <Link href={card.url}>
                      <span className="uppercase font-mono text-black underline underline-offset-2 cursor-pointer">Read More</span>
                    </Link>
                    
                  )}
                </div>
              </div>
              </>
              ) : (
                // for rest side cards
                <>
                  <h1 className="text-3xl mb-2 uppercase">{card.title}</h1>
                  <p className='text-sm mb-2'>{card.description}</p>
                  {card.url && (
                    <Link href={card.url}>
                      <span className="uppercase font-mono text-black underline underline-offset-2 cursor-pointer">Read More</span>
                    </Link>
                  )}
                  <img alt={card.title} className="w-full h-auto object-cover mt-2" src={card.image} />
                </>
              )}
            </div>
          ))}
        </div> 
        


        <div className='mx-auto text-center mt-4'>
        <ReadMoreButton link="/blog" label="view all articles"/>
        </div>

        <div className="flex flex-col md:flex-row my-10">
          
          <div className="w-full md:w-1/2 order-1 max-md:order-1">
            <img alt="journal" className="w-full h-full object-cover" src="/images/blogs/blog-shop.jpg" />
          </div>

          <div className="w-full md:w-1/2 p-4 order-2 max-md:order-2 flex flex-col items-center justify-center">
            <h1 className="text-gray-900 text-3xl md:text-4xl uppercase mb-4 lg:mt-24 ">SHOP the LOOK</h1>
            <ReadMoreButton link="/jewelry" label="read more"/>
          </div>

        </div>

        <h1 className='text-3xl uppercase font-semibold'>Shop the Kumari Collection</h1>
<BlogSlider blogs={blogs}/> 
        
      </div>
    </section>
  );
};

export default Journal;