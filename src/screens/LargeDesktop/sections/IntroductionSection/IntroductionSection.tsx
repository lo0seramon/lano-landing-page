import React from "react";

export const IntroductionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-10 w-full">
      <h1 className="font-['Geist',Helvetica] text-black text-[192px] leading-[192px] tracking-[-9.60px]">
        <span className="font-bold tracking-[-18.43px]">Meet Lano</span>
        <span className="tracking-[-18.43px]">
          ,<br />
          your trusted money pilot.
        </span>
      </h1>

      <div className="font-['Geist_Mono',Helvetica] text-black text-5xl tracking-[-2.40px] leading-[48px]">
        <span className="tracking-[-1.15px]">
          We turn everyday spending into automatic savings ———{" "}
        </span>

        <span className="font-bold tracking-[-1.15px]">
          faster, easier, stress‑free.
          <br />{" "}
        </span>

        <span className="tracking-[-1.15px]">
          Pay with Lano and we save a bit for you. Little by little. As simple
          as that. Lano is built for people, not spreadsheets: more care, less
          jargon.
          <br />
          <br />
        </span>

        <span className="font-bold tracking-[-1.15px]">
          <br />
          <br />
          <br />
        </span>

        <span className="tracking-[-1.15px]">
          Simple. Inclusive. Transparent. Uncompromised.
        </span>
      </div>
    </section>
  );
};
