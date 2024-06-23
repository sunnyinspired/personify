'use client'

import { ScoreContext } from "@/utils/context/scoreContext"
import { getPersonality } from "@/utils/functions/personality";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react"
import TestSpinLoader from "../components/spinners/TestResultSpinner";
import Extrovert from "../components/personality/Extrovert";
import Introvert from "../components/personality/Introvert";

function PageFallBack(){
    return (
        <p className="text-red-500 text-3xl font-extrabold text-center py-16">
            Loading... Please Wait
        </p>
    )
}

function TestResult() {
    const { scores } = useContext(ScoreContext);
    const [personality, setPersonality] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
   
    //checks if the questions have all been answered and calculates the personality
    function validateScores(){
        if(scores.length < 5){
            router.replace('/tests')
        }
        else{
            //calls the function that calculate the scores and pass the score to it
            setPersonality(getPersonality(scores))
        }
    }

    useEffect(() =>{
        setLoading(true)
        validateScores();
        //creates a timer that delays the result display for 3 seconds
        const timeoutId = setTimeout(() => {
            setLoading(false);
          }, 3000);
    
          return () => clearTimeout(timeoutId); 
        
    }, []);

  return (  
    <div className="lg:min-h-[370px] min-h-[60vh]">
        {
            //Checks if there is no personality sets, then displays load. 
            //This guard against calling the page directly
            personality != 'Introvert' && personality != 'Extrovert' ? <PageFallBack /> : 
            
            loading ? <TestSpinLoader /> :
            <div className="mx-auto my-16 py-16 lg:w-[50%] w-[90%] px-8 lg:px-12 bg-white shadow rounded">
                <div className="text-center">
                    <p className="py-3 bg-cyan-600 font-bold uppercase text-white mb-5">
                        Personality Test Result
                    </p>
                    <span className="text-cyan-600 font-[900] text-xl">
                        Hooray!
                    </span> 
                    <span className="font-semibold"> Here is your Result</span>
                </div>
                <div className="text-center py-5">
                    <p>Based on the answers you provided, you are likely an</p>
                    <p className="mt-8 lg:py-4 py-10 px-3  text-3xl  font-black text-cyan-600  border border-cyan-600  w-48 mx-auto">
                        {personality}
                    </p>
                </div>
                {
                    personality == 'Introvert' ? <Introvert /> : <Extrovert />
                }
                   
            </div>
        }
    </div>
  )
}
export default TestResult