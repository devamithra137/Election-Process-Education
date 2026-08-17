import React from "react";
import SectionHeading from "./SectionHeading";

export interface CountingStage {
  stageNumber: number;
  title: string;
  description: string;
}

const countingStages: CountingStage[] = [
  {
    stageNumber: 1,
    title: "Votes Are Collected",
    description:
      "Completed paper ballots or secure electronic voting data are collected and transported according to established security procedures.",
  },
  {
    stageNumber: 2,
    title: "Votes Are Counted",
    description:
      "Official election staff count ballots using transparent, standardized, and legally defined counting mechanisms.",
  },
  {
    stageNumber: 3,
    title: "Verification & Review",
    description:
      "Tabulation accuracy is verified through reconciliation, cross-checks, and review protocols defined by electoral rules.",
  },
  {
    stageNumber: 4,
    title: "Results Are Declared",
    description:
      "The designated election authority officially certifies and publishes the final election results to the public.",
  },
];

export const VoteCounting: React.FC = () => {
  return (
    <section id="counting" className="counting-section">
      <SectionHeading
        title="Vote Counting & Results"
        subtitle="How votes are processed, verified, and officially declared after polls close."
      />

      <div className="counting-grid">
        {countingStages.map((stage) => (
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
