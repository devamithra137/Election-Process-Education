import React from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

interface LearningStep {
  stepNumber: number;
  title: string;
  description: string;
  href: string;
}

const LEARNING_STEPS: LearningStep[] = [
  {
    stepNumber: 1,
    title: "Election Process",
    description:
      "Understand the broad overview and major phases that make up democratic elections.",
    href: "/election-process",
  },
  {
    stepNumber: 2,
    title: "Voter Registration",
    description:
      "Learn who is eligible to vote, required documents, deadlines, and registration steps.",
    href: "/voter-registration",
  },
  {
    stepNumber: 3,
    title: "Voting Process",
    description:
      "Follow the sequence of steps for arriving at polling places, verifying ID, and casting ballots.",
    href: "/voting-process",
  },
  {
    stepNumber: 4,
    title: "Vote Counting & Results",
    description:
      "Explore how ballots are securely collected, verified, tallied, reconciled, and declared.",
    href: "/vote-counting",
  },
  {
    stepNumber: 5,
    title: "Election Terminology",
    description:
      "Explore key definitions and foundational concepts with a searchable glossary.",
    href: "/glossary",
  },
  {
    stepNumber: 6,
    title: "Test Your Knowledge",
    description:
      "Check and reinforce your understanding with an interactive, self-paced quiz.",
    href: "/quiz",
  },
];

export const LearningPath: React.FC = () => {
  return (
    <section
      className="learning-path-section"
      aria-labelledby="learning-path-heading"
    >
      <SectionHeading
        title="Recommended Learning Path"
        subtitle="A step-by-step educational roadmap recommended for beginners exploring democratic elections."
      />

      <div className="learning-path-grid" role="list">
        {LEARNING_STEPS.map((step) => (
          <article
            key={step.stepNumber}
            className="learning-path-card"
            role="listitem"
          >
            <div className="learning-path-step-badge" aria-hidden="true">
              Step {step.stepNumber}
            </div>
            <div className="learning-path-card-content">
              <h3 className="learning-path-card-title">{step.title}</h3>
              <p className="learning-path-card-desc">{step.description}</p>
            </div>
            <div className="learning-path-card-action">
              <Link
                href={step.href}
                className="learning-path-card-link"
                aria-label={`Step ${step.stepNumber}: ${step.title}`}
              >
                Start Step {step.stepNumber} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LearningPath;
