import React from "react";
import SectionHeading from "./SectionHeading";

import {
  type VotingStep,
  VOTING_PROCESS_STEPS,
} from "@/data/electionProcess";

export type { VotingStep };

export const VotingProcess: React.FC = () => {
  return (
    <section id="voting" className="voting-section">
      <SectionHeading
        title="Voting Process"
        subtitle="A step-by-step guide to how voting typically works on election day."
      />

      <div className="voting-grid">
        {VOTING_PROCESS_STEPS.map((step) => (
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
