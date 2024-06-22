export const getPersonality = (scores) => {
    const newScores = scores.map(score => score.answerValue);
    console.log(`New Scores: ${newScores}`)
    const totalScore = newScores.reduce((sum, score) => sum + score, 0);
    console.log(`Total Score: ${totalScore}`)
    return totalScore > 0 ? "Extrovert" : "Introvert";
  }