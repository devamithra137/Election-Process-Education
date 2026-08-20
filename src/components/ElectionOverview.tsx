import React from "react";
import SectionHeading from "./SectionHeading";
import InfoCard from "./InfoCard";

import {
  type OverviewStep,
  ELECTION_OVERVIEW_STEPS,
} from "@/data/electionProcess";

export type { OverviewStep };

export const ElectionOverview: React.FC = () => {
  return (
    <section id="process" className="overview-section">
      <SectionHeading
        title="How Elections Work"
        subtitle="A high-level overview of the core phases in a democratic election."
      />
      <div className="overview-grid">
        {ELECTION_OVERVIEW_STEPS.map((step) => (
          <InfoCard
            key={step.stepNumber}
            className="overview-card"
            badge={<span className="step-badge">{step.stepNumber}</span>}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ElectionOverview;
