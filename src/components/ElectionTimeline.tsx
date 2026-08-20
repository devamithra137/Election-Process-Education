import React from "react";
import SectionHeading from "./SectionHeading";

import {
  type TimelineStage,
  ELECTION_TIMELINE_STAGES,
} from "@/data/electionProcess";

export type { TimelineStage };

export const ElectionTimeline: React.FC = () => {
  return (
    <section id="timeline" className="timeline-section">
      <SectionHeading
        title="General Election Timeline"
        subtitle="A general educational overview of the typical stages in a democratic electoral cycle."
      />

      <div className="timeline-container">
        {ELECTION_TIMELINE_STAGES.map((stage) => (
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
