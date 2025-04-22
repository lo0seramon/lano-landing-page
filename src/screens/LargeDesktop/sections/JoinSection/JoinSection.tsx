import React from "react";

export const JoinSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-4 md:gap-6 w-full">
      <h1 className="font-black text-black text-4xl sm:text-7xl md:text-[clamp(100px,25vw,400px)] tracking-[-4px] md:tracking-[-20px] leading-tight md:leading-[0.74em]">
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
