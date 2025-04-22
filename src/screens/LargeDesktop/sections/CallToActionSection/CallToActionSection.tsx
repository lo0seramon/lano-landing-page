import React from "react";

export const CallToActionSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col py-10 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-[100px] bg-black w-full">
      <div className="flex flex-col gap-6">
        <h2 className="font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-snug lg:leading-[48px] font-['Geist',Helvetica]">
          lano
        </h2>

        <div className="flex flex-col gap-4">
          <p className="font-normal text-white text-base sm:text-lg lg:text-2xl leading-normal sm:leading-relaxed lg:leading-6 font-['Geist_Mono',Helvetica]">
            Policy &amp; Privacy
          </p>

          <p className="font-normal text-white text-base sm:text-lg lg:text-2xl leading-normal sm:leading-relaxed lg:leading-6 font-['Geist_Mono',Helvetica]">
            All rights protected © Lano 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
