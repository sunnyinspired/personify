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
        setScores([...scores, score]);
        console.log(scores)
        
    }

    const handleNext = () =>{
        if(currentQuestionIndex < questions.length - 1){
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
        else{
            const personality = btoa(getPersonality(scores));
            router.push(`/test-result?t=${personality}`)
        }
    }

    const handlePrevious = () =>{
        if(currentQuestionIndex > 0){

            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    useEffect(() =>{
        getQuestions()
    },[])

    // useEffect(() => {
    //     // Reset selected answer when moving to a new question
    //     setSelectedAnswer(null);
    //   }, [currentQuestionIndex]);
    
  return (
    <>
    {
        loading && <SpinLoader />
    }
    <div className="mx-auto my-12 py-16 lg:w-[60%] px-24 lg:px-12 bg-white shadow rounded">
        {
            questions && 
            <>
            <h1 className="text-2xl font-bold mb-8">Question {currentQuestionIndex + 1}</h1>
            <Question question={questions[currentQuestionIndex]} 
                selectedAnswer={selectedAnswer}
                onAnswer={handleAnswer} 
            />
            <div className=" text-gray-600 flex justify-between items-center">
               
                <button 
                     className={`${currentQuestionIndex > 0 ?'bg-cyan-600 hover:bg-cyan-500' : 'bg-gray-400'} px-5 py-2 text-white font-semibold rounded shadow-md `}
                    onClick={handlePrevious}
                >
                    Previous
                </button>
                <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
                <button 
                    className={`${currentQuestionIndex == questions.length -1 ? 'bg-red-600 hover:bg-red-500' : 'bg-cyan-600 hover:bg-cyan-500'} 
                        px-5 py-2 text-white font-semibold rounded shadow-md`}
                    onClick={handleNext}
                >
                    {
                        currentQuestionIndex == questions.length -1 ? 'Finish' : 'Next'
                    }
                </button>
            </div>

            </>
        }
    </div>
    </>
  )
}

export default TestQuestions