import Carousel from "@/components/ui/styleguide-carousel";

const StyledCards = () => {
  const styleCard = [
    {
      imgSrc: "/images/kumari-guides/sg_stack.jpg",
      title: "STACK IT UP",
      description: "Stacking necklaces is an excellent method to add depth and dimension to your outfit. To create a one-of-a-kind look, experiment with various lengths, textures, and styles. Play around with various metals and textures - the contrast can add an interesting and unexpected element to your look.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 mb-6 w-full">
      {styleCard.map((card, index) => (
        <div key={index} className="flex w-1/2 max-md:w-full">
          <img
            src={card.imgSrc}
            alt={card.title}
            className=" h-auto object-cover" // Adjust width as needed
          />
          <div className="flex flex-col w-3/5 mx-auto justify-center border">
            <Carousel />
            <div className="mt-8">
              <h1 className="text-3xl font-thin">{card.title}</h1>
              <p className="font-condensed mt-4 text-ellipsis">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StyledCards;