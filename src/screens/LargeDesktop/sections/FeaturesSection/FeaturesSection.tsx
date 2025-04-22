import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FeaturesSection = (): JSX.Element => {
  // Data for security features
  const securityFeatures = [
    "End‑to‑End Encryption",
    "Open‑Source Code",
    "Zero‑Knowledge Security",
    "Trustless System",
  ];

  // Data for explanation card
  const explanationSections = [
    {
      title: "What it means:",
      description:
        "Your message leaves your phone already locked and is only unlocked on your friend's phone.",
    },
    {
      title: "Why you care:",
      description:
        "No one in-between—apps, servers, Wi-Fi, governments—can peek or change it.",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-4 md:gap-8 w-full">
      <div className="flex flex-col items-start gap-2 md:gap-4 w-full">
        {securityFeatures.map((feature, index) => (
          <h2
            key={index}
            className="w-full font-['Geist',Helvetica] font-bold text-black text-3xl sm:text-5xl md:text-[70px] lg:text-[110px] tracking-[0] leading-tight md:leading-[110px] underline"
          >
            {feature}
          </h2>
        ))}
      </div>

      <p className="w-full font-['Geist_Mono',Helvetica] font-normal text-black text-base sm:text-xl md:text-2xl tracking-[-1.20px] leading-6">
        It is not for debate: we do not take any chances when it comes to your
        money. What does it mean? You control the keys. Our code is auditable.
        We cannot read your data. Security relies on math and open scrutiny,
        not any corporate promise.
      </p>

      <Card className="w-full bg-black rounded-[5px] overflow-hidden p-0 border-none">
        <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 p-4 md:p-8">
          {explanationSections.map((section, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-start gap-1 flex-1 min-w-[180px]">
                <h3 className="w-full font-['Geist_Mono',Helvetica] font-bold text-white text-base md:text-xl tracking-[-1.00px] leading-5">
                  {section.title}
                </h3>
                <p className="w-full font-['Geist_Mono',Helvetica] font-normal text-white text-xs md:text-base tracking-[-0.80px] leading-4">
                  {section.description}
                </p>
              </div>

              {index < explanationSections.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-auto bg-white/50 hidden md:block"
                />
              )}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
