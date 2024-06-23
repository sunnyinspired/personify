import { getPersonality } from "../utils/functions/personality.js";

describe('Get Personality Result', () => {
    test('returns Extrovert for total scores greater than zero', () => {
        expect(getPersonality([{answerValue: 1}, {answerValue: 1}, {answerValue: -1}, {answerValue: 0}, {answerValue: 1}])).toBe('Extrovert')
    });

    test('returns Introvert for total scores less than zero', () => {
        expect(getPersonality([{answerValue: 1}, {answerValue: -1}, {answerValue: -1}, {answerValue: 0}, {answerValue: 1}])).toBe('Introvert')
    });
    test('returns Introvert for total scores equals to zero', () => {
        expect(getPersonality([{answerValue: 1}, {answerValue: -1}, {answerValue: -1}, {answerValue: 0}, {answerValue: 1}])).toBe('Introvert')
    })
});

