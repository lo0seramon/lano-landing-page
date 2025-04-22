import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { useLanguage } from "../../../../i18n/LanguageContext";
import { LanguageSwitcher } from "../../../../components/LanguageSwitcher";


export const SecuritySection = (): JSX.Element => {
  const { t } = useLanguage();
  
  // FAQ data for mapping
  const faqItems = [
    {
      question: t('faq1Question'),
      answer: t('faq1Answer'),
    },
    {
      question: t('faq2Question'),
      answer:
      t('faq2Answer'),
    },
    {
      question: t('faq3Question'),
      answer: t('faq3Answer'),
    },
    {
      question: t('faq4Question'),
      answer: t('faq4Answer'),
    },
    {
      question: t('faq5Question'),
      answer:
      t('faq5Answer'),
    },
    {
      question: t('faq6Question'),
      answer: t('faq6Answer'),
    },
    {
      question: t('faq7Question'),
      answer: t('faq7Answer'),
    },
  ];

  return (
    <section className="flex flex-col items-start gap-6 w-full">
      <h2 className="font-['Geist_Mono',Helvetica] font-bold text-black text-8xl tracking-[-4.80px] leading-[96px]">
        FAQ
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="font-['Geist_Mono',Helvetica] font-bold text-black text-5xl tracking-[-2.40px] leading-[48px] py-4 text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-['Geist_Mono',Helvetica] text-black text-xl">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
