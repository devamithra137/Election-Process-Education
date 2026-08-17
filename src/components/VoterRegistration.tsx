import React from "react";
import SectionHeading from "./SectionHeading";

export interface RegistrationStep {
  stepNumber: number;
  title: string;
  description: string;
}

const registrationSteps: RegistrationStep[] = [
  {
    stepNumber: 1,
    title: "Check Eligibility",
    description:
      "Confirm age, citizenship, and residency criteria established by your local electoral laws.",
  },
  {
    stepNumber: 2,
    title: "Complete Registration",
    description:
      "Submit the required voter application form along with valid identification or proof of residence.",
  },
  {
    stepNumber: 3,
    title: "Verify Registration Details",
    description:
      "Review the official electoral roll or voter list to ensure your name and polling station details are correct.",
  },
  {
    stepNumber: 4,
    title: "Keep Information Updated",
    description:
      "Update your voter record promptly if you change your address, legal name, or voter status.",
  },
];

export const VoterRegistration: React.FC = () => {
  return (
    <section id="registration" className="registration-section">
      <SectionHeading
        title="Voter Registration"
        subtitle="Key steps to participating in democratic elections as an eligible voter."
      />

      <div className="registration-grid">
        {registrationSteps.map((step) => (
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
