import React from "react";
import SectionHeading from "./SectionHeading";

export interface TimelineStage {
  stageNumber: number;
  title: string;
  description: string;
}

const stages: TimelineStage[] = [
  {
    stageNumber: 1,
    title: "Election Preparation",
    description:
      "Election authorities prepare the electoral framework, publish schedules, and set up administrative infrastructure.",
  },
  {
    stageNumber: 2,
    title: "Voter Registration",
    description:
      "Eligible citizens register, update details, and confirm their entry on official electoral rolls.",
  },
  {
    stageNumber: 3,
    title: "Candidate Process",
    description:
      "Candidates file nominations, undergo scrutiny, and are finalized according to applicable election rules.",
  },
  {
    stageNumber: 4,
    title: "Campaign & Information Period",
    description:
      "Candidates present their platforms while voter education campaigns provide neutral civic information.",
  },
  {
    stageNumber: 5,
    title: "Voting",
    description:
      "Registered voters cast their secret ballots on designated election dates through official voting methods.",
  },
  {
    stageNumber: 6,
    title: "Counting & Verification",
    description:
      "Votes are systematically counted, audited, and verified according to established legal procedures.",
  },
  {
    stageNumber: 7,
    title: "Results Declaration",
    description:
      "Official election results are declared by the election authority, concluding the electoral cycle.",
  },
];

export const ElectionTimeline: React.FC = () => {
  return (
    <section id="timeline" className="timeline-section">
      <SectionHeading
        title="General Election Timeline"
        subtitle="A general educational overview of the typical stages in a democratic electoral cycle."
      />

      <div className="timeline-container">
        {stages.map((stage) => (
          <div key={stage.stageNumber} className="timeline-item">
            <div className="timeline-marker">{stage.stageNumber}</div>
            <div className="timeline-content">
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ElectionTimeline;
