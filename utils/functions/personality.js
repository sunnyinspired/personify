export const getPersonality = (scores) => {
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    return totalScore > 0 ? "Extrovert" : "Introvert";
  }