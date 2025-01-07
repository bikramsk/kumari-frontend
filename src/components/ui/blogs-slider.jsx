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


export default function BlogSlider({ blogs }) {
  return (
    <section className="w-full">
      <div className="lg:max-w-6xl">
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
            {blogs.map((blog, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="flex flex-col py-5 sm:p-6">
                  <div className="mt-6 flex flex-col gap-3">
                  
                    <span className="inline-flex rounded-full">
                      <Image
                        loader={imageLoader}
                        className="w-full"
                        height={200}
                        width={200}
                        alt={blog.name}
                        src={blog.image}
                        loading="lazy"
                     />
                    </span>
                    <div>
                     <p className="text-xl tracking-wide uppercase font-semibold text-gray-500 dark:text-white">
                        {blog.name}
                      </p>
                      {blog.url && (
                      <Link href={blog.url}>
                     <span className="underline underline-offset-2 uppercase text-xs text-black">discover more</span>
                     </Link>)}
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {blog.role}
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