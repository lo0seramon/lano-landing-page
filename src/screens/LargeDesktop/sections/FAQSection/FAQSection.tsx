import React from "react";

export const FAQSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto">
        <h2 className="font-bold text-[200px] tracking-[-10px] leading-[168px] [-webkit-text-stroke:1px_#000000] text-transparent font-['Geist',Helvetica]">
          Not a bank. <br />
          Not a card. <br />
          Not a network.
        </h2>

        <h2 className="font-bold text-[200px] tracking-[-10px] leading-[168px] text-black font-['Geist',Helvetica] mt-6">
          Just a personal money agent.
        </h2>
      </div>
    </section>
  );
};
