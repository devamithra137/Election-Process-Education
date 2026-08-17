import React from "react";
import SectionHeading from "./SectionHeading";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "eligibility",
    question: "Who is eligible to vote?",
    answer:
      "Voter eligibility typically depends on age, citizenship, residency, and registration status. Exact requirements vary by country and jurisdiction, so always check with your local electoral authority.",
  },
  {
    id: "registration",
    question: "How does voter registration work?",
    answer:
      "Voter registration involves submitting your personal and residence details to official electoral authorities to be placed on the electoral roll. Procedures and deadlines differ depending on your location.",
  },
  {
    id: "voting-day",
    question: "What happens when I go to vote?",
    answer:
      "Upon arriving at your assigned polling place or using an official voting channel, your identity and registration are verified. You then cast your vote privately using designated paper ballots or electronic voting devices.",
  },
  {
    id: "counting",
    question: "How are votes counted?",
    answer:
      "Votes are systematically collected and counted after polls close by authorized election officials, using transparent procedures, cross-checks, and audit protocols defined by election law.",
  },
  {
    id: "results",
    question: "When are election results announced?",
    answer:
      "Preliminary results may be reported shortly after polls close, while final certified results are formally declared by the election authority after complete tabulation and verification.",
  },
  {
    id: "official-info",
    question: "Where can I find official election information?",
    answer:
      "Official information regarding election schedules, polling locations, voter registration, and candidate lists is published by your country or region's official election management body.",
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="faq-section">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Clear answers to common questions about democratic elections."
      />

      <div className="faq-list">
        {faqData.map((item) => (
          <details key={item.id} className="faq-item">
            <summary className="faq-question">{item.question}</summary>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
