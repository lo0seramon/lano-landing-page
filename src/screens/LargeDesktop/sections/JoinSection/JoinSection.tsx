import React from "react";

export const JoinSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-4 md:gap-6 w-full">
      <h1 className="font-black text-black w-full font-['Geist',Helvetica] text-7xl sm:text-9xl md:text-[100px] lg:text-[160px] xl:text-[240px] 2xl:text-[436px] tracking-tighter md:tracking-[-10px] lg:tracking-[-21.80px] leading-tight lg:leading-[1]">
        Free —<br />
        Forever.
      </h1>

      <p className="font-mono font-normal text-black text-base sm:text-2xl md:text-5xl tracking-[-1px] md:tracking-[-2.4px] leading-6 md:leading-[48px] max-w-full md:max-w-[1531px]">
        That is it: there is no fine print, no hidden fees, no magic tricks.
        We&apos;re here to redefine independence by making wealth-building
        accessible to everyone.
      </p>
    </section>
  );
};
