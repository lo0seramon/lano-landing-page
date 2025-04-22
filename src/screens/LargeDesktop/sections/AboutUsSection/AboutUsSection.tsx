import React from "react";
import { Button } from "../../../../components/ui/button";
import { useLanguage } from "../../../../i18n/LanguageContext";
import { LanguageSwitcher } from "../../../../components/LanguageSwitcher";

export const AboutUsSection = (): JSX.Element => {
  return <AboutUsSectionContent />;
};

// Componente interno que usa o contexto de idioma
const AboutUsSectionContent = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-start gap-[50px] w-full">
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="font-black text-black text-5xl leading-[48px] font-['Geist',Helvetica]">
            {t('brandName')}
          </h1>

          <LanguageSwitcher />
        </div>

        <a
          href="#"
          className="font-['Geist_Mono',Helvetica] font-bold text-black text-2xl text-right tracking-[-1.20px] leading-6"
        >
          {t('earlyAccess')}
        </a>
      </header>

      <main className="w-full relative">
        <h2 className="w-full font-['Geist',Helvetica] font-black text-black text-[436px] tracking-[-21.80px] leading-[436px]">
          {t('mainHeading')}
        </h2>

        <p className="w-full mt-[436px] font-['Geist_Mono',Helvetica] font-normal text-black text-8xl tracking-[-4.80px] leading-[96px]">
          {t('subHeading')}
        </p>

        <Button
          variant="default"
          className="inline-flex items-center gap-10 px-6 py-2 mt-[144px] bg-black rounded-[5px]"
        >
          <span className="font-['Geist_Mono',Helvetica] font-normal text-white text-4xl tracking-[-1.80px] leading-[48px]">
            {t('scrollDown')}
          </span>
          <span className="font-['Geist_Mono',Helvetica] font-normal text-white text-4xl tracking-[-1.80px] leading-[48px]">
            ↓
          </span>
        </Button>
      </main>
    </section>
  );
};