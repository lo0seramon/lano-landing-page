import React from "react";

export const JoinSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 w-full">
      <h1 className="font-black text-black text-[clamp(100px,25vw,400px)] tracking-[-20px] leading-[0.74em]">
        Free —<br />
        Forever.
      </h1>

      <p className="font-mono font-normal text-black text-5xl tracking-[-2.4px] leading-[48px] max-w-[1531px]">
        That is it: there is no fine print, no hidden fees, no magic tricks.
        We&apos;re here to redefine independence by making wealth-building
        accessible to everyone.
      </p>
    </section>
  );
};
