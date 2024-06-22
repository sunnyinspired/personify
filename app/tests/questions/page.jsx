'use client'
import SpinLoader from "@/app/components/SpinLoader";
import Question from "@/app/components/questions/Question";
import { getPersonality } from "@/utils/functions/personality";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

function TestQuestions() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const getQuestions = () =>{
        setLoading(true)
        axios.get('/api/questions')
        .then(response => {
            setLoading(false)
            setQuestions(response.data)
        })
    }

    const handleAnswer = (score) =>{
        setSelectedAnswer(score);
        const newScores = [...scores];
        newScores[currentQuestionIndex] = score;
        setScores(newScores);
        if(currentQuestionIndex < questions.length - 1){
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
        else{
            const personality = btoa(getPersonality(scores));
            router.push(`/test-result?t=${personality}`)
        }
    }

    useEffect(() =>{
        getQuestions()
    },[])

    useEffect(() => {
        // Reset selected answer when moving to a new question
        setSelectedAnswer(null);
      }, [currentQuestionIndex]);
    
  return (
    <>
    {
        loading && <SpinLoader />
    }
    <div className="mx-auto py-16 lg:w-[60%]">
        {
            questions && 
            <>
            <h1 className="text-3xl font-bold mb-8">Question {currentQuestionIndex + 1}</h1>
            <Question question={questions[currentQuestionIndex]} 
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer} 
            />
            <div className="mt-4 text-gray-600">
            Question {currentQuestionIndex + 1} of {questions.length}
            </div>

            </>
        }
    </div>
    </>
  )
}

export default TestQuestions