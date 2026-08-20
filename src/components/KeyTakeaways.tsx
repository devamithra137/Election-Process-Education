import React from "react";
import SectionHeading from "./SectionHeading";

const takeaways: string[] = [
  "Elections follow an established process governed by applicable election rules.",
  "Voter registration helps establish who is eligible to participate.",
  "Voting procedures can differ depending on the jurisdiction and election.",
  "Votes are counted and verified according to the applicable procedures.",
  "Official election authorities publish or declare election results.",
];

export const KeyTakeaways: React.FC = () => {
  return (
    <section id="takeaways" className="takeaways-section">
      <SectionHeading
        title="Key Takeaways"
        subtitle="Core principles to remember about democratic election processes."
      />

      <div className="takeaways-grid">
        {takeaways.map((takeaway, index) => (
          <div key={index} className="takeaway-card">
            <div className="takeaway-badge" aria-hidden="true">
              {index + 1}
            </div>
            <p className="takeaway-text">{takeaway}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyTakeaways;
