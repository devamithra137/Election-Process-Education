import React from "react";
import SectionHeading from "./SectionHeading";

import {
  type CountingStage,
  VOTE_COUNTING_STAGES,
} from "@/data/electionProcess";

export type { CountingStage };

export const VoteCounting: React.FC = () => {
  return (
    <section id="counting" className="counting-section">
      <SectionHeading
        title="Vote Counting & Results"
        subtitle="How votes are processed, verified, and officially declared after polls close."
      />

      <div className="counting-grid">
        {VOTE_COUNTING_STAGES.map((stage) => (
          <div key={stage.stageNumber} className="counting-card">
            <div className="counting-step-number">{stage.stageNumber}</div>
            <div className="counting-content">
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="counting-note">
        <p>
          Counting procedures vary depending on the country, election type, and applicable election authority.
        </p>
      </div>
    </section>
  );
};

export default VoteCounting;
