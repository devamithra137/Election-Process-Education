import React from "react";
import SectionHeading from "./SectionHeading";

export interface OverviewStep {
  stepNumber: number;
  title: string;
  description: string;
}

const steps: OverviewStep[] = [
  {
    stepNumber: 1,
    title: "Voter Registration",
    description:
      "Eligible citizens register to vote with their local electoral authority according to applicable voter registration rules.",
  },
  {
    stepNumber: 2,
    title: "Candidate & Constituency Process",
    description:
      "Candidates file nominations to participate in elections, representing distinct electoral constituencies.",
  },
  {
    stepNumber: 3,
    title: "Voting",
    description:
      "Registered voters cast their secret ballot on designated election days through official voting mechanisms.",
  },
  {
    stepNumber: 4,
    title: "Counting & Results",
    description:
      "Votes are systematically counted through secure official procedures, and final results are declared by the election commission.",
  },
];

export const ElectionOverview: React.FC = () => {
  return (
    <section id="process" className="overview-section">
      <SectionHeading
        title="How Elections Work"
        subtitle="A high-level overview of the core phases in a democratic election."
      />
      <div className="overview-grid">
        {steps.map((step) => (
          <div key={step.stepNumber} className="overview-card">
            <div className="step-badge">{step.stepNumber}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ElectionOverview;
