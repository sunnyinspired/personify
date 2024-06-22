'use client'

export default function Question({ question, selectedAnswer, onAnswer }) {
    return (
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-4 ">{question?.text}</h2>
        <div className="space-y-2">
          {question?.answers.map((answer, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name={`question-${question?.id}`}
                value={answer?.score}
                checked={selectedAnswer === answer.score}
                onChange={() => onAnswer(answer.score)}
                className="sr-only"
              />
              <span
                className={`block w-full p-2 text-left border rounded cursor-pointer transition-colors duration-200 ease-in-out
                  ${
                    selectedAnswer === answer.score
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white hover:bg-gray-100'
                  }`}
              >
                {answer.text}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  }