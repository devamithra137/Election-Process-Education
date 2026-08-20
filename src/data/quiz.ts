export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  correctIndex: number;
  explanation: string;
}

export type Question = QuizQuestion;

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is voter registration?",
    options: [
      "The process of casting a physical or electronic ballot on election day.",
      "The official process through which eligible individuals enroll to participate in an election.",
      "The campaign activity where candidates present their platforms to the public.",
      "The tallying of counted ballots after polls close.",
    ],
    correctAnswer: 1,
    correctIndex: 1,
    explanation:
      "Voter registration is the process by which eligible individuals enroll according to electoral rules before participating in an election.",
  },
  {
    id: 2,
    question: "What is a constituency?",
    options: [
      "A national committee managed by political parties.",
      "An official document listing candidate names on a ballot.",
      "A defined electoral district whose eligible voters elect representatives to public office.",
      "A temporary polling location used on election day.",
    ],
    correctAnswer: 2,
    correctIndex: 2,
    explanation:
      "A constituency (or electoral district) is a geographic area whose voters elect representatives to legislative or public office.",
  },
  {
    id: 3,
    question: "What happens during voting?",
    options: [
      "Votes are audited and certified into official national tallies.",
      "Eligible voters cast their ballots in private using paper, electronic, or mail-in methods.",
      "Election authorities publish the final election results.",
      "Candidates register their legal eligibility with electoral courts.",
    ],
    correctAnswer: 1,
    correctIndex: 1,
    explanation:
      "During voting, eligible voters select their choices and cast their ballots securely and privately through designated methods.",
  },
  {
    id: 4,
    question: "What happens during vote counting?",
    options: [
      "Citizens register their eligibility on the electoral roll.",
      "Candidates deliver public speeches at polling stations.",
      "Ballots are gathered, verified, and systematically tallied to calculate total votes.",
      "Voters receive new identification credentials for future elections.",
    ],
    correctAnswer: 2,
    correctIndex: 2,
    explanation:
      "Vote counting involves gathering, verifying, and tallying ballots under secure procedures to determine accurate vote totals.",
  },
  {
    id: 5,
    question: "Who declares the official election results?",
    options: [
      "Private media outlets and news broadcasters.",
      "Political campaign organizations.",
      "The official, designated election authority for the jurisdiction.",
      "International non-governmental observer groups.",
    ],
    correctAnswer: 2,
    correctIndex: 2,
    explanation:
      "Official election results are certified and declared by the designated election authority for the relevant jurisdiction.",
  },
];
