import React from "react";
import { useLanguage } from "../../../../i18n/LanguageContext";

export const IntroductionSection = (): JSX.Element => {
  const { t } = useLanguage();
  return (
    <section className="flex flex-col items-start gap-10 w-full">
      <h1 className="font-['Geist',Helvetica] text-black text-[192px] leading-[192px] tracking-[-9.60px]">
        <span className="font-bold tracking-[-18.43px]">{t('meetLanoTitle')}</span>
        <span className="tracking-[-18.43px]">
          ,<br />
          {t('meetLanoTitle1')}
        </span>
      </h1>

      <div className="font-['Geist_Mono',Helvetica] text-black text-5xl tracking-[-2.40px] leading-[48px]">
        <span className="tracking-[-1.15px]">
          {t('meetLanoDesc1')}
        </span>

        <span className="font-bold tracking-[-1.15px]">
        {t('meetLanoDesc2')}
          <br />{" "}
        </span>

        <span className="tracking-[-1.15px]">
        {t('meetLanoDesc3')}
          <br />
          <br />
        </span>

        <span className="font-bold tracking-[-1.15px]">
          <br />
          <br />
          <br />
        </span>

        <span className="tracking-[-1.15px]">
        {t('meetLanoDesc4')}
        </span>
      </div>
    </section>
  );
};
