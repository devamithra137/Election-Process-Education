import {
  type GlossaryCategory,
  type GlossaryItemCategory,
  type GlossaryTerm,
  type GlossaryItem,
} from "@/types";

export type { GlossaryCategory, GlossaryItemCategory, GlossaryTerm, GlossaryItem };

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  "All",
  "Voters",
  "Election Process",
  "Voting",
  "Counting & Results",
];

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    term: "Voter",
    definition:
      "An eligible individual who exercises their right to participate in a democratic election by casting a ballot.",
    category: "Voters",
  },
  {
    term: "Voter Registration",
    definition:
      "The official process through which eligible individuals register with electoral authorities to participate in upcoming elections.",
    category: "Voters",
  },
  {
    term: "Electoral Roll",
    definition:
      "An official register maintained by election authorities listing all individuals eligible to vote within a specific jurisdiction.",
    category: "Voters",
  },
  {
    term: "Constituency",
    definition:
      "A defined geographical region or electoral district whose eligible voters elect representatives to public office.",
    category: "Election Process",
  },
  {
    term: "Candidate",
    definition:
      "An individual competing in an election to be elected to an official office or legislative body.",
    category: "Election Process",
  },
  {
    term: "Ballot",
    definition:
      "The official medium used by a voter to record their choice, such as a paper ballot sheet or an electronic voting system interface.",
    category: "Voting",
  },
  {
    term: "Polling Station",
    definition:
      "A designated physical location where voters cast their votes on designated election days under official supervision.",
    category: "Voting",
  },
  {
    term: "Vote Counting",
    definition:
      "The process of collecting, verifying, and tallying votes to calculate total results for each candidate or referendum measure.",
    category: "Counting & Results",
  },
  {
    term: "Election Result",
    definition:
      "The certified final outcome of an election, officially detailing the vote tallies and declaring elected candidates or passed measures.",
    category: "Counting & Results",
  },
  {
    term: "Election Authority",
    definition:
      "The official agency or public body legally tasked with administering, managing, and enforcing rules for democratic elections.",
    category: "Election Process",
  },
];
