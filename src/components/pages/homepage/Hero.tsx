"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero")
  return (
    <section className="flex min-h-[80vh] flex-col gap-10 px-[20px] py-20 lg:px-0 xl:flex-row xl:items-center">
      <FadeInLeftWithSlowBounce className="flex basis-full flex-col items-center space-y-5 xl:basis-1/2 xl:items-start xl:pl-40 xl:pr-20">
        <h1 className="text-center text-5xl font-bold leading-[60px] xl:text-left">
          {t("title")}
        </h1>
        <p className="text-center xl:text-left">{t("desc")}</p>
        <div className="space-x-2">
          <Link href="/contact">
            <Button>{t("btn1")}</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="border-primary text-primary">
              {t("btn2")}
            </Button>
          </Link>
        </div>
      </FadeInLeftWithSlowBounce>
      <FadeInRightWithSlowBounce className="basis-full xl:basis-1/2">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="basis-1/2 xl:basis-1/3">
              <div className="relative min-h-[500px] w-full">
                <Image
                  className="rounded-lg object-cover object-center"
                  src="/images/hero-slider/1.jpg"
                  alt="Hero slider"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 xl:basis-1/3">
              <div className="relative min-h-[500px] w-full">
                <Image
                  className="rounded-lg object-cover object-center"
                  src="/images/hero-slider/2.jpg"
                  alt="Hero slider"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 xl:basis-1/3">
              <div className="relative min-h-[500px] w-full">
                <Image
                  className="rounded-lg object-cover object-center"
                  src="/images/hero-slider/3.jpg"
                  alt="Hero slider"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 xl:basis-1/3">
              <div className="relative min-h-[500px] w-full">
                <Image
                  className="rounded-lg object-cover object-center"
                  src="/images/hero-slider/4.jpg"
                  alt="Hero slider"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 xl:basis-1/3">
              <div className="relative min-h-[500px] w-full">
                <Image
                  className="rounded-lg object-cover object-center"
                  src="/images/hero-slider/5.jpg"
                  alt="Hero slider"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 xl:basis-1/3">
              <div className="relative min-h-[500px] w-full">
                <Image
                  className="rounded-lg object-cover object-center"
                  src="/images/hero-slider/6.jpg"
                  alt="Hero slider"
                  fill
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 xl:basis-1/3">
              <div className="relative min-h-[500px] w-full">
                <Image
                  className="rounded-lg object-cover object-center"
                  src="/images/hero-slider/7.jpg"
                  alt="Hero slider"
                  fill
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </FadeInRightWithSlowBounce>
    </section>
  );
};

export default Hero;
