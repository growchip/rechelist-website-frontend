"use client";

import { useState } from "react";

import { FAQData } from "@/types/static-items";

type FAQProps = {
  faqData: FAQData;
};

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="mb-gapSmall text-2xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-primary text-center">
        Frequently Asked Questions
      </h1>

      {/* Accordion */}
      <div className="mt-6 space-y-4">
        {faqData.data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-700 hover:text-primary transition-colors"
            >
              <span>{item.title}</span>
              <span className="ml-4 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Animated content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 pt-0 text-gray-600 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
