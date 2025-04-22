import React from "react";
import { useLanguage } from "../../../../i18n/LanguageContext";

export const IntroductionSection = (): JSX.Element => {
  const { t } = useLanguage();
  return (
    <section className="flex flex-col items-start gap-4 md:gap-10 w-full">
      <h1 className="font-black text-black w-full font-['Geist',Helvetica] text-7xl sm:text-9xl md:text-[100px] lg:text-[160px] xl:text-[240px] 2xl:text-[436px] tracking-tighter md:tracking-[-10px] lg:tracking-[-21.80px] leading-tight lg:leading-[1]">
        <span className="font-bold tracking-[-4px] md:tracking-[-18.43px]">{t('meetLanoTitle')}</span>
        <span className="tracking-[-4px] md:tracking-[-18.43px]">
          ,<br />
          {t('meetLanoTitle1')}
        </span>
      </h1>

      <div className="font-['Geist_Mono',Helvetica] text-black text-base sm:text-2xl md:text-5xl tracking-[-0.5px] md:tracking-[-2.40px] leading-6 md:leading-[48px]">
        <span className="tracking-[-0.5px] md:tracking-[-1.15px]">
          {t('meetLanoDesc1')}
        </span>

        <span className="font-bold tracking-[-0.5px] md:tracking-[-1.15px]">
        {t('meetLanoDesc2')}
          <br />{" "}
        </span>

        <span className="tracking-[-0.5px] md:tracking-[-1.15px]">
        {t('meetLanoDesc3')}
          <br />
          <br />
        </span>

        <span className="font-bold tracking-[-0.5px] md:tracking-[-1.15px]">
          <br />
          <br />
          <br />
        </span>

        <span className="tracking-[-0.5px] md:tracking-[-1.15px]">
        {t('meetLanoDesc4')}
        </span>
      </div>
    </section>
  );
};
