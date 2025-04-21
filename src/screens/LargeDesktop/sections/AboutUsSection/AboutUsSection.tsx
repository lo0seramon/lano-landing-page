import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const AboutUsSection = (): JSX.Element => {
  // Language options data
  const languages = [
    { code: "EN", selected: true },
    { code: "ES", selected: false },
    { code: "PT", selected: false },
  ];

  return (
    <section className="flex flex-col items-start gap-[50px] w-full">
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="font-black text-black text-5xl leading-[48px] font-['Geist',Helvetica]">
            lano
          </h1>

          <ToggleGroup
            type="single"
            defaultValue="EN"
            className="flex items-center gap-1"
          >
            {languages.map((lang) => (
              <ToggleGroupItem
                key={lang.code}
                value={lang.code}
                className={`px-4 py-3 rounded-[5px] border border-solid border-black ${
                  lang.selected ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <span className="font-['Geist',Helvetica] font-normal text-2xl leading-6">
                  {lang.code}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <a
          href="#"
          className="font-['Geist_Mono',Helvetica] font-bold text-black text-2xl text-right tracking-[-1.20px] leading-6"
        >
          Get early access ↗
        </a>
      </header>

      <main className="w-full relative">
        <h2 className="w-full font-['Geist',Helvetica] font-black text-black text-[436px] tracking-[-21.80px] leading-[436px]">
          SPEND → SAVE
        </h2>

        <p className="w-full mt-[436px] font-['Geist_Mono',Helvetica] font-normal text-black text-8xl tracking-[-4.80px] leading-[96px]">
          Love spending, hate saving? Let Lano flip the script.
        </p>

        <Button
          variant="default"
          className="inline-flex items-center gap-10 px-6 py-2 mt-[144px] bg-black rounded-[5px]"
        >
          <span className="font-['Geist_Mono',Helvetica] font-normal text-white text-4xl tracking-[-1.80px] leading-[48px]">
            Scroll down
          </span>
          <span className="font-['Geist_Mono',Helvetica] font-normal text-white text-4xl tracking-[-1.80px] leading-[48px]">
            ↓
          </span>
        </Button>
      </main>
    </section>
  );
};
