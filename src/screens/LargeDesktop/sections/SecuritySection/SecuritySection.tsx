import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const SecuritySection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is Lano?",
      answer: "Information about Lano will appear here when expanded.",
    },
    {
      question: "What can I do with Lano?",
      answer:
        "Details about Lano's features and capabilities will appear here.",
    },
    {
      question: "Is Lano already available?",
      answer: "Information about Lano's availability will appear here.",
    },
    {
      question: "Why should I use Lano?",
      answer: "Benefits and advantages of using Lano will appear here.",
    },
    {
      question: "How is my money protected?",
      answer:
        "Information about security measures for protecting your money will appear here.",
    },
    {
      question: "What happens if I lose my phone or the encryption keys?",
      answer: "Recovery procedures and safeguards will be explained here.",
    },
    {
      question: "Does Lano charge any fees?",
      answer: "Details about Lano's fee structure will appear here.",
    },
    {
      question: "Can I move my money out instantly and free of charge?",
      answer: "Information about withdrawals and transfers will appear here.",
    },
    {
      question:
        "How does Lano keep my data private if it's using Artificial Intelligence?",
      answer:
        "Privacy measures and AI data handling practices will be explained here.",
    },
    {
      question: "How does Lano make money?",
      answer:
        "Lano's business model and revenue sources will be described here.",
    },
    {
      question: "Who is behind Lano?",
      answer: "Information about Lano's team and founders will appear here.",
    },
    {
      question: "Who has invested on Lano?",
      answer: "Details about Lano's investors and funding will appear here.",
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
