"use client";

import Image from "next/image";
import { imageLoader } from "@/lib/imageLoader";
import Autoplay from "embla-carousel-autoplay";
import{
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";



export default function TestimonialSlider({ testimonials }) {
  return (
    <section className="w-full py-4">
      <div className="mx-auto lg:max-w-6xl">
        <Carousel
          options={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false, 
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="flex flex-col py-5 sm:p-6">
                  <div className="mt-6 flex flex-col gap-3">
                  {testimonial.url && (
                    <><Link href={testimonial.url}>
                      <span className="inline-flex rounded-full">                       
<img alt={testimonial.name} className="w-full h-auto object-cover mb-2 " src={testimonial.imgSrc} />
 </span>
                      </Link>
                      </>
                    
                  )}
                    <div>{testimonial.url && ( <Link href={testimonial.url}>
                     <p className="text-xl tracking-wide uppercase font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p></Link>   )}
                      <p className="text-md text-gray-500 dark:text-gray-400">
                        {testimonial.date}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>



              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="lg:hidden absolute left-[-10px] top-1/2 -translate-y-1/2 text-black "/>
          <CarouselNext className="lg:hidden  absolute right-[-0px] top-1/2 -translate-y-1/2 text-black " />
        </Carousel>
      </div>
    </section>
  );
}