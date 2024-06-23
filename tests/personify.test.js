// Import `getPersonality` for calculating personality types
import { getPersonality } from "../utils/functions/personality.js";

// Test suite for getPersonality function
describe('Get Personality Result', () => {
  // Test: Extrovert for positive total score
  test('Extrovert for total score greater than zero (0)', () => {
    expect(getPersonality([
      { answerValue: 1 }, 
      { answerValue: 1 },
      { answerValue: -1 },
      { answerValue: 0 },
      { answerValue: 1 }
    ])).toBe('Extrovert');
  });

  // Test: Introvert for negative total score
  test('Introvert for total score less than zero (0)', () => {
    expect(getPersonality([
      { answerValue: 1 },
      { answerValue: -1 },
      { answerValue: -1 },
      { answerValue: 0 },
      { answerValue: 1 }
    ])).toBe('Introvert');
  });

  // Test: Introvert for zero total score
  test('Introvert for total score equal to zero (0)', () => {
    expect(getPersonality([
      { answerValue: 1 },
      { answerValue: -1 },
      { answerValue: -1 },
      { answerValue: 0 },
      { answerValue: 1 }
    ])).toBe('Introvert');
  });
});

