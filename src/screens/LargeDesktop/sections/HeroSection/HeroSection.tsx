import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const HeroSection = (): JSX.Element => {
  // Data for the carousel items
  const steps = [
    {
      title: "Connect your accounts",
      bgColor: "bg-black",
    },
    {
      title: "Connect your accounts",
      bgColor: "bg-[#00000080]",
    },
    {
      title: "Set a saving goal",
      bgColor: "bg-[#00000080]",
    },
    {
      title: "Voilà; spend to save",
      bgColor: "bg-[#00000080]",
    },
    {
      title: "See your money grow",
      bgColor: "bg-[#00000080]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[50px] relative overflow-hidden">
      <h2 className="self-stretch [font-family:'Geist',Helvetica] font-bold text-black text-3xl sm:text-5xl md:text-8xl tracking-[0] leading-tight md:leading-[96px]">
        How does it work?
      </h2>

      <Carousel className="w-full">
        <CarouselContent className="flex items-start gap-8 md:gap-[50px] lg:gap-[100px]">
          {steps.map((step, index) => (
            <CarouselItem
              key={index}
              className="basis-[90vw] sm:basis-[70vw] md:basis-[500px] lg:basis-[634px] flex-grow-0 flex-shrink-0 pl-0"
            >
              <Card className="flex flex-col items-start gap-8 md:gap-20 border-none">
                <h3 className="relative self-stretch [font-family:'Geist_Mono',Helvetica] font-normal text-[#00000080] text-2xl sm:text-3xl md:text-5xl tracking-[-1.2px] md:tracking-[-2.40px] leading-[32px] md:leading-[48px]">
                  {step.title}
                </h3>
                <CardContent
                  className={`p-0 self-stretch w-full h-[40vw] min-h-[200px] max-h-[400px] md:h-[600px] lg:h-[1178px] ${step.bgColor}`}
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
