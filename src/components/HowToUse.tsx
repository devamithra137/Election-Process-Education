import React from "react";
import Link from "next/link";
import Section from "./Section";
import InfoCard from "./InfoCard";

export interface HowToUseStepLink {
  label: string;
  href: string;
}

export interface HowToUseStep {
  stepNumber: number;
  title: string;
  description: string;
  links: HowToUseStepLink[];
}

export const HOW_TO_USE_STEPS: HowToUseStep[] = [
  {
    stepNumber: 1,
    title: "Start with the Election Process",
    description:
      "Begin with a general election-process overview to understand the fundamental stages and principles of democratic elections.",
    links: [
      {
        label: "Election Process →",
        href: "/election-process",
      },
    ],
  },
  {
    stepNumber: 2,
    title: "Learn the Individual Stages",
    description:
      "Explore each core stage in detail: Voter Registration, Voting Process, and Vote Counting & Results.",
    links: [
      {
        label: "Voter Registration",
        href: "/voter-registration",
      },
      {
        label: "Voting Process",
        href: "/voting-process",
      },
      {
        label: "Vote Counting & Results",
        href: "/vote-counting",
      },
    ],
  },
  {
    stepNumber: 3,
    title: "Review Election Terminology",
    description:
      "Consult the glossary whenever you encounter unfamiliar civic or electoral terms to understand key definitions.",
    links: [
      {
        label: "Glossary →",
        href: "/glossary",
      },
    ],
  },
  {
    stepNumber: 4,
    title: "Test Your Knowledge",
    description:
      "Take the interactive Knowledge Quiz after completing the learning sections to check and reinforce your understanding.",
    links: [
      {
        label: "Knowledge Quiz →",
        href: "/quiz",
      },
    ],
  },
];

export const HowToUse: React.FC = () => {
  return (
    <Section
      id="how-to-use"
      title="How to Use This Site"
      subtitle="A simple 4-step guide explaining a beginner-friendly learning flow to navigate our educational resources."
      className="how-to-use-section"
    >
      <div className="how-to-use-grid" role="list">
        {HOW_TO_USE_STEPS.map((step) => (
          <article
            key={step.stepNumber}
            className="how-to-use-item"
            role="listitem"
          >
            <InfoCard
              title={step.title}
              description={step.description}
              badge={
                <span
                  className="step-badge"
                  aria-label={`Step ${step.stepNumber}`}
                >
                  {step.stepNumber}
                </span>
              }
              className="how-to-use-card"
            >
              <div className="how-to-use-links">
                {step.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="how-to-use-link"
                    aria-label={`Step ${step.stepNumber}: ${link.label}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </InfoCard>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default HowToUse;
