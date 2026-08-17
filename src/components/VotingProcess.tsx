import React from "react";
import SectionHeading from "./SectionHeading";

export interface VotingStep {
  stepNumber: number;
  title: string;
  description: string;
}

const votingSteps: VotingStep[] = [
  {
    stepNumber: 1,
    title: "Verify Voter Eligibility",
    description:
      "Confirm you meet applicable age, citizenship, and residency requirements and are registered on official electoral rolls.",
  },
  {
    stepNumber: 2,
    title: "Locate Assigned Voting Location",
    description:
      "Check official notifications from your relevant election authority to find your assigned polling station or voting method.",
  },
  {
    stepNumber: 3,
    title: "Verify Identity & Registration",
    description:
      "Follow the required identity check and voter verification procedure upon arrival at the voting location.",
  },
  {
    stepNumber: 4,
    title: "Cast Your Vote",
    description:
      "Make your selection in privacy using the officially provided voting mechanism, such as paper ballot or electronic voting system.",
  },
  {
    stepNumber: 5,
    title: "Confirm Vote Recording",
    description:
      "Follow designated procedures to deposit or submit your ballot, ensuring your vote is securely recorded.",
  },
];

export const VotingProcess: React.FC = () => {
  return (
    <section id="voting" className="voting-section">
      <SectionHeading
        title="Voting Process"
        subtitle="A step-by-step guide to how voting typically works on election day."
      />

      <div className="voting-grid">
        {votingSteps.map((step) => (
          <div key={step.stepNumber} className="voting-card">
            <div className="voting-badge">{step.stepNumber}</div>
            <div className="voting-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="voting-disclaimer">
        <p>
          Voting procedures can differ by country, election, and jurisdiction. Always refer to the official election authority for current instructions.
        </p>
      </div>
    </section>
  );
};

export default VotingProcess;
