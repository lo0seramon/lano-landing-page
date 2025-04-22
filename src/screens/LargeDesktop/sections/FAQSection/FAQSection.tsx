import React from "react";

export const FAQSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="font-bold text-4xl sm:text-7xl md:text-[120px] lg:text-[200px] tracking-[-2px] md:tracking-[-10px] leading-tight md:leading-[168px] [-webkit-text-stroke:1px_#000000] text-transparent font-['Geist',Helvetica]">
          Not a bank. <br />
          Not a card. <br />
          Not a network.
        </h2>

        <h2 className="font-bold text-2xl sm:text-5xl md:text-[120px] lg:text-[200px] tracking-[-2px] md:tracking-[-10px] leading-tight md:leading-[168px] text-black font-['Geist',Helvetica] mt-4 md:mt-6">
          Just a personal money agent.
        </h2>
      </div>
    </section>
  );
};
