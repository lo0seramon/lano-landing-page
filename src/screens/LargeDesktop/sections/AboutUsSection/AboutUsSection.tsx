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
    <section className="flex flex-col items-start gap-[20px] md:gap-[30px] lg:gap-[50px] w-full p-2 sm:p-4 md:p-6 lg:p-8">
      <header className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <h1 className="font-black text-black text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight font-['Geist',Helvetica]">
            {t('brandName')}
          </h1>

          <LanguageSwitcher />
        </div>

        <a
          href="#"
          className="font-['Geist_Mono',Helvetica] font-bold text-black text-base sm:text-lg md:text-xl lg:text-2xl text-right tracking-tight leading-6"
        >
          {t('earlyAccess')}
        </a>
      </header>

      <main className="w-full relative">
        <h2 className="w-full font-['Geist',Helvetica] font-black text-black text-3xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-[200px] 2xl:text-[436px] tracking-tighter md:tracking-[-10px] lg:tracking-[-21.80px] leading-tight lg:leading-[1]">
          {t('mainHeading')}
        </h2>

        <p className="w-full mt-4 sm:mt-8 md:mt-16 lg:mt-24 xl:mt-32 2xl:mt-[436px] font-['Geist_Mono',Helvetica] font-normal text-black text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight md:tracking-[-2px] lg:tracking-[-4.80px] leading-tight lg:leading-[1.2]">
          {t('subHeading')}
        </p>

        <Button
          variant="default"
          size="responsive"
          className="inline-flex items-center gap-2 sm:gap-4 md:gap-8 lg:gap-10 mt-8 sm:mt-12 md:mt-24 lg:mt-32 xl:mt-[100px] 2xl:mt-[144px] bg-black rounded-[5px]"
        >
          <span className="font-['Geist_Mono',Helvetica] font-normal text-white text-base sm:text-lg md:text-2xl lg:text-4xl tracking-tight md:tracking-[-1px] lg:tracking-[-1.80px] leading-tight">
            {t('scrollDown')}
          </span>
          <span className="font-['Geist_Mono',Helvetica] font-normal text-white text-base sm:text-lg md:text-2xl lg:text-4xl tracking-tight md:tracking-[-1px] lg:tracking-[-1.80px] leading-tight">
            ↓
          </span>
        </Button>
      </main>
    </section>
  );
};