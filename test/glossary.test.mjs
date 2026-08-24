import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { filterGlossaryItems } from '../src/lib/glossary.ts';

describe('Glossary Filtering Logic', () => {
  const sampleItems = [
    {
      term: 'Voter',
      definition:
        'An eligible individual who exercises their right to participate in a democratic election by casting a ballot.',
      category: 'Voters',
    },
    {
      term: 'Voter Registration',
      definition:
        'The official process through which eligible individuals register with electoral authorities to participate in upcoming elections.',
      category: 'Voters',
    },
    {
      term: 'Electoral Roll',
      definition:
        'An official register maintained by election authorities listing all individuals eligible to vote within a specific jurisdiction.',
      category: 'Voters',
    },
    {
      term: 'Constituency',
      definition:
        'A defined geographical region or electoral district whose eligible voters elect representatives to public office.',
      category: 'Election Process',
    },
    {
      term: 'Candidate',
      definition:
        'An individual competing in an election to be elected to an official office or legislative body.',
      category: 'Election Process',
    },
    {
      term: 'Ballot',
      definition:
        'The official medium used by a voter to record their choice, such as a paper ballot sheet or an electronic voting system interface.',
      category: 'Voting',
    },
    {
      term: 'Polling Station',
      definition:
        'A designated physical location where voters cast their votes on designated election days under official supervision.',
      category: 'Voting',
    },
    {
      term: 'Vote Counting',
      definition:
        'The process of collecting, verifying, and tallying votes to calculate total results for each candidate or referendum measure.',
      category: 'Counting & Results',
    },
    {
      term: 'Election Result',
      definition:
        'The certified final outcome of an election, officially detailing the vote tallies and declaring elected candidates or passed measures.',
      category: 'Counting & Results',
    },
    {
      term: 'Election Authority',
      definition:
        'The official agency or public body legally tasked with administering, managing, and enforcing rules for democratic elections.',
      category: 'Election Process',
    },
  ];

  it('Case 1: Empty search + "All" category -> all glossary terms', () => {
    const results = filterGlossaryItems(sampleItems, '', 'All');
    assert.strictEqual(results.length, sampleItems.length);
    assert.deepStrictEqual(results, sampleItems);

    const whitespaceResults = filterGlossaryItems(sampleItems, '   ', 'All');
    assert.strictEqual(whitespaceResults.length, sampleItems.length);
  });

  it('Case 2: Exact term search -> matching term is returned', () => {
    const results = filterGlossaryItems(sampleItems, 'Constituency', 'All');
    assert.strictEqual(results.length, 1);
    assert.strictEqual(results[0].term, 'Constituency');
    assert.strictEqual(results[0].category, 'Election Process');
  });

  it('Case 3: Partial search -> matching terms are returned', () => {
    const countResults = filterGlossaryItems(sampleItems, 'count', 'All');
    assert.strictEqual(countResults.length, 1);
    assert.strictEqual(countResults[0].term, 'Vote Counting');

    const rollResults = filterGlossaryItems(sampleItems, 'Roll', 'All');
    assert.strictEqual(rollResults.length, 1);
    assert.strictEqual(rollResults[0].term, 'Electoral Roll');
  });

  it('Case 4: Search is case-insensitive', () => {
    const lowerResults = filterGlossaryItems(sampleItems, 'ballot', 'All');
    const upperResults = filterGlossaryItems(sampleItems, 'BALLOT', 'All');
    const mixedResults = filterGlossaryItems(sampleItems, 'BaLLoT', 'All');

    assert.strictEqual(lowerResults.length, 2);
    assert.deepStrictEqual(lowerResults, upperResults);
    assert.deepStrictEqual(lowerResults, mixedResults);
  });

  it('Case 5: Category filtering -> only terms in the selected category are returned', () => {
    const votingResults = filterGlossaryItems(sampleItems, '', 'Voting');
    assert.strictEqual(votingResults.length, 2);
    assert.ok(votingResults.every((item) => item.category === 'Voting'));
    assert.deepStrictEqual(
      votingResults.map((item) => item.term),
      ['Ballot', 'Polling Station']
    );

    const countingResults = filterGlossaryItems(
      sampleItems,
      '',
      'Counting & Results'
    );
    assert.strictEqual(countingResults.length, 2);
    assert.ok(
      countingResults.every((item) => item.category === 'Counting & Results')
    );
  });

  it('Case 6: Search + category together -> only terms satisfying both filters are returned', () => {
    const voterCatResults = filterGlossaryItems(
      sampleItems,
      'Registration',
      'Voters'
    );
    assert.strictEqual(voterCatResults.length, 1);
    assert.strictEqual(voterCatResults[0].term, 'Voter Registration');
    assert.strictEqual(voterCatResults[0].category, 'Voters');

    const electionProcessResults = filterGlossaryItems(
      sampleItems,
      'election',
      'Election Process'
    );
    assert.ok(electionProcessResults.length > 0);
    assert.ok(
      electionProcessResults.every(
        (item) => item.category === 'Election Process'
      )
    );

    const mismatchResults = filterGlossaryItems(
      sampleItems,
      'Ballot',
      'Counting & Results'
    );
    assert.strictEqual(mismatchResults.length, 0);
  });

  it('Case 7: No matching terms -> empty result', () => {
    const noResults = filterGlossaryItems(
      sampleItems,
      'nonexistentquery12345',
      'All'
    );
    assert.strictEqual(noResults.length, 0);
    assert.deepStrictEqual(noResults, []);

    const noCategoryMatch = filterGlossaryItems(
      sampleItems,
      'Constituency',
      'Voting'
    );
    assert.strictEqual(noCategoryMatch.length, 0);
    assert.deepStrictEqual(noCategoryMatch, []);
  });
});
