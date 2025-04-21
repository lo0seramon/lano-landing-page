import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Switch } from "../../../../components/ui/switch";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      title: "Bills just catch me by surprise.",
      description:
        '"It\'s stressful to plan out my money and get ready for unexpected expenses that come out of the wild blue."',
      active: true,
    },
    {
      id: 2,
      title: "Cash sits idle, everywhere.",
      description:
        '"I have no idea what to do with my money; it\'s hard to know where to put and make the most out of it."',
      active: false,
    },
    {
      id: 3,
      title: "Balance? Honestly no clue.",
      description:
        '"Honestly, I don\'t even know how much I have; my money is everywhere and I have no head to sort it out."',
      active: false,
    },
    {
      id: 4,
      title: "Spend first, pray later.",
      description:
        '"My money is out of control. I spend first and save what is left, hoping the best will come."',
      active: false,
    },
    {
      id: 5,
      title: "Money choices overwhelm me.",
      description:
        '"I neglect any money decisions. Everything seems too complex, too risky, and too demanding."',
      active: false,
    },
  ];

  return (
    <section className="flex flex-col items-start gap-[52px] w-full">
      <h2 className="self-stretch [font-family:'Geist',Helvetica] font-bold text-black text-8xl tracking-[0] leading-[96px]">
        Does this hit home?
      </h2>

      <div className="flex flex-col items-start gap-8 w-full">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex items-center gap-10 w-full">
            <div className="flex flex-col items-start gap-1 flex-1">
              <h3 className="self-stretch [font-family:'Geist',Helvetica] font-bold text-black text-5xl tracking-[-2.40px] leading-[48px]">
                {testimonial.title}
              </h3>
              <p className="self-stretch [font-family:'Geist_Mono',Helvetica] font-normal text-black text-2xl tracking-[-1.20px] leading-6">
                {testimonial.description}
              </p>
            </div>
            <div
              className={`flex w-[88px] h-11 items-center gap-2.5 p-1 rounded-[200px] ${testimonial.active ? "bg-black" : "bg-[#bec5cd]"}`}
            >
              <Switch
                checked={testimonial.active}
                className="w-9 h-full bg-white rounded-[200px] shadow-[0px_5.89px_11.78px_#2727271a] data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
              />
            </div>
          </div>
        ))}
      </div>

      <Card className="w-full bg-black rounded-[5px] overflow-hidden border-none">
        <CardContent className="p-5">
          <p className="[font-family:'Geist_Mono',Helvetica] font-normal text-white text-2xl tracking-[-1.20px] leading-6">
            <span className="font-bold tracking-[-0.29px]">
              You are not alone. <br />
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
