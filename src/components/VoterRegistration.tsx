import React from "react";
import SectionHeading from "./SectionHeading";

import {
  type RegistrationStep,
  VOTER_REGISTRATION_STEPS,
} from "@/data/electionProcess";

export type { RegistrationStep };

export const VoterRegistration: React.FC = () => {
  return (
    <section id="registration" className="registration-section">
      <SectionHeading
        title="Voter Registration"
        subtitle="Key steps to participating in democratic elections as an eligible voter."
      />

      <div className="registration-grid">
        {VOTER_REGISTRATION_STEPS.map((step) => (
          <div key={step.stepNumber} className="registration-card">
            <div className="registration-step-number">{step.stepNumber}</div>
            <div className="registration-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="registration-notice">
        <p>
          <strong>Please note:</strong> Specific voter eligibility rules, registration deadlines, required documentation, and application procedures vary by jurisdiction and official election authority.
        </p>
      </div>
    </section>
  );
};

export default VoterRegistration;
