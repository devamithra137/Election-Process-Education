export interface ProcessStage {
  stageNumber?: number;
  stepNumber?: number;
  title: string;
  description: string;
}

export interface OverviewStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface TimelineStage {
  stageNumber: number;
  title: string;
  description: string;
}

export interface RegistrationStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface VotingStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface CountingStage {
  stageNumber: number;
  title: string;
  description: string;
}

export const ELECTION_OVERVIEW_STEPS: OverviewStep[] = [
  {
    stepNumber: 1,
    title: "Voter Registration",
    description:
      "Eligible citizens register to vote with their local electoral authority according to applicable voter registration rules.",
  },
  {
    stepNumber: 2,
    title: "Candidate & Constituency Process",
    description:
      "Candidates file nominations to participate in elections, representing distinct electoral constituencies.",
  },
  {
    stepNumber: 3,
    title: "Voting",
    description:
      "Registered voters cast their secret ballot on designated election days through official voting mechanisms.",
  },
  {
    stepNumber: 4,
    title: "Counting & Results",
    description:
      "Votes are systematically counted through secure official procedures, and final results are declared by the election commission.",
  },
];

export const ELECTION_TIMELINE_STAGES: TimelineStage[] = [
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

export const VOTER_REGISTRATION_STEPS: RegistrationStep[] = [
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

export const VOTING_PROCESS_STEPS: VotingStep[] = [
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

export const VOTE_COUNTING_STAGES: CountingStage[] = [
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
