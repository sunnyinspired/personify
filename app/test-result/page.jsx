'use client'

import { ScoreContext } from "@/utils/context/scoreContext"
import { getPersonality } from "@/utils/functions/personality";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react"
import TestSpinLoader from "../components/spinners/TestResultSpinner";

function TestResult() {
    const { scores } = useContext(ScoreContext);
    const [personality, setPersonality] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    //console.log(`scores`)


    function validateScores(){
        if(scores.length < 5){
            router.back()
        }
        else{
            setPersonality(getPersonality(scores))
        }
    }

    useEffect(() =>{
        setLoading(true)
        validateScores();
        const timeoutId = setTimeout(() => {
            setLoading(false);
          }, 10000);
    
          return () => clearTimeout(timeoutId); 
        
    }, []);

  return (
    <>
    
        <div className="min-h-[350px]">
            {
                loading ? <TestSpinLoader /> :
                <div className="mx-auto my-12 py-12 lg:w-[50%] w-[90%] px-8 lg:px-12 bg-white shadow rounded">
                    <div className="text-center">
                        <span className="text-cyan-600 font-[900] text-2xl">
                            Hooray!
                        </span> 
                        <span className="text-xl font-semibold"> Here is your Result</span>
                    </div>
                    <div className="text-center py-5 text-xl font-[500]">
                        <p>Based on the answers you provided, you are likely an</p>

                        <p className="mt-8 lg:py-4 py-10 px-3 bg-cyan-600 text-3xl  font-black text-gray-100 rounded">
                            {personality}
                        </p>
                    </div>

                       
                </div>
            }
        </div>
    </>
  )
}

export default TestResult