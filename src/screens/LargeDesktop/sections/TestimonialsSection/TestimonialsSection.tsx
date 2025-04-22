import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Switch } from "../../../../components/ui/switch";
import { useLanguage } from "../../../../i18n/LanguageContext";
import { LanguageSwitcher } from "../../../../components/LanguageSwitcher";

export const TestimonialsSection = (): JSX.Element => {
  const { t } = useLanguage();
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      title:  t('painPoint1Title'),
      description: t('painPoint1Desc'),
      active: true,
    },
    {
      id: 2,
      title: t('painPoint2Title'),
      description: t('painPoint2Desc'),
      active: false,
    },
    {
      id: 3,
      title: t('painPoint3Title'),
      description: t('painPoint3Desc'), 
      active: false,
    },
    {
      id: 4,
      title: t('painPoint4Title'),
      description: t('painPoint4Desc'),
      active: false,
    },
    {
      id: 5,
      title: t('painPoint5Title'),
      description: t('painPoint5Desc'),
      active: false,
    },
  ];

  return (
    <section className="flex flex-col items-start gap-4 md:gap-[52px] w-full">
      <h2 className="self-stretch [font-family:'Geist',Helvetica] font-bold text-black text-3xl sm:text-5xl md:text-8xl tracking-[0] leading-tight md:leading-[96px]">
      {t('reasonTitle')}
      </h2>

      <div className="flex flex-col items-start gap-4 md:gap-8 w-full">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 w-full">
            <div className="flex flex-col items-start gap-1 flex-1">
              <h3 className="self-stretch [font-family:'Geist',Helvetica] font-bold text-black text-xl sm:text-3xl md:text-5xl tracking-[-1px] md:tracking-[-2.40px] leading-tight md:leading-[48px]">
                {testimonial.title}
              </h3>
              <p className="self-stretch [font-family:'Geist_Mono',Helvetica] font-normal text-black text-base sm:text-xl md:text-2xl tracking-[-0.5px] md:tracking-[-1.20px] leading-6">
                {testimonial.description}
              </p>
            </div>
            <div
              className={`flex w-[64px] md:w-[88px] h-8 md:h-11 items-center gap-2.5 p-1 rounded-[200px] ${testimonial.active ? "bg-black" : "bg-[#bec5cd]"}`}
            >
              <Switch
                checked={testimonial.active}
                className="w-6 md:w-9 h-full bg-white rounded-[200px] shadow-[0px_5.89px_11.78px_#2727271a] data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
              />
            </div>
          </div>
        ))}
      </div>

      <Card className="w-full bg-black rounded-[5px] overflow-hidden border-none">
        <CardContent className="p-3 md:p-5">
          <p className="[font-family:'Geist_Mono',Helvetica] font-normal text-white text-base sm:text-xl md:text-2xl tracking-[-0.5px] md:tracking-[-1.20px] leading-6">
            <span className="font-bold tracking-[-0.29px]">
            {t('notAloneTitle')} <br />
            </span>

            <span className="tracking-[-0.29px]">
              <br />
              Around half (
            </span>

            <a
              href="https://www.bankrate.com/loans/personal-loans/money-and-mental-health-survey/?utm_source=chatgpt.com#bankrates-insights"
              rel="noopener noreferrer"
              target="_blank"
              className="tracking-[-0.29px] underline"
            >
              47 percent
            </a>

            <span className="tracking-[-0.29px]">
              ) of U.S. adults say money has a negative impact on their mental
              health, at least occasionally, causing anxiety, stress, worrisome
              thoughts, loss of sleep, depression or other effects. About
              two-thirds of Americans (
            </span>

            <a
              href="https://content.schwab.com/web/retail/public/about-schwab/schwab_modern_wealth_survey_2024_findings.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="tracking-[-0.29px] underline"
            >
              64 percent
            </a>

            <span className="tracking-[-0.29px]">
              ) do not have a formal financial plan. Only a small portion (
            </span>

            <a
              href="https://content.schwab.com/web/retail/public/about-schwab/schwab_modern_wealth_survey_2024_findings.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="tracking-[-0.29px] underline"
            >
              18 percent
            </a>

            <span className="tracking-[-0.29px]">
              ) of people feel they are on top of their finances. More than half
              (
            </span>

            <a
              href="https://unidosus.org/wp-content/uploads/2024/06/unidosus_oportun_bsp_latinobankingandfinancialhealthsurvey_memo_61124.pdf?utm_source=chatgpt.com"
              rel="noopener noreferrer"
              target="_blank"
              className="tracking-[-0.29px] underline"
            >
              56 percent
            </a>

            <span className="tracking-[-0.29px]">
              ) of Latinos do not have any emergency or buffer fund, reporting
              less than $400 in their savings account. Today, an average
              consumer has around one-hundred thousand dollars (
            </span>

            <a
              href="https://www.experian.com/blogs/ask-experian/consumer-credit-review"
              rel="noopener noreferrer"
              target="_blank"
              className="tracking-[-0.29px] underline"
            >
              $105,056
            </a>

            <span className="tracking-[-0.29px]">
              ) in mortgage, medical or credit card debt.
            </span>
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
