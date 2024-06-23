'use client'

import { ScoreContext } from "@/utils/context/scoreContext"
import { getPersonality } from "@/utils/functions/personality";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react"
import TestSpinLoader from "../components/spinners/TestResultSpinner";
import Link from "next/link";

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
          }, 3000);
    
          return () => clearTimeout(timeoutId); 
        
    }, []);

  return (
    <>
    
        <div className="lg:min-h-[370px] min-h-[60vh]">
            {
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
                        personality == 'Introvert' ? 
                        <div className="my-4 text-justify">
                            <p className="font-bold py-2">A Quick Review</p>
                            <p className="py-4">
                                Introversion refers to the tendency to focus more on inner experiences–such as your own feelings and thoughts–than outer ones. 
                                Introverts are typically more intrinsically motivated, self-reliant, guarded, and introspective than extroverts. 
                                Some may be shy and socially anxious. Others simply prefer spending time alone. 
                            </p>
                            <p>
                                Some of the benefits of introversion include greater self-sufficiency, self-awareness, and focus, as well as lower impulsivity and a tendency to build high-quality, trusting relationships. 
                            </p>
                            <p className="py-4">
                                The disadvantages of introversion may include loneliness, stigma, less emotional stability, difficulty standing up for oneself, and risk avoidance.
                            </p>
                            <p>
                                <Link href="https://www.health.com/introvert-7480695" target="_blank">
                                    <span className="text-cyan-600 font-semibold underline hover:text-cyan-500">Click here</span>
                                </Link>
                                &nbsp;to know more about Introverts.
                            </p>
                        </div>
                        :
                        <div className="my-4 text-justify">
                            <p className="font-bold py-2">A Quick Review</p>
                            <p className="py-4">
                                Extroverts tend to be outgoing, talkative, action-oriented, spontaneous, energetic, and optimistic. They often thrive in a crowd and are more interested in the outer world than in reflecting on their inner experiences.
                            </p>
                            <p>
                                Extroverts tend to thrive in social situations and gain energy from interacting with others. 
                                They often excel at communication, networking, and building relationships. 
                                Extroverts are typically comfortable taking on leadership roles, public speaking, and engaging in group activities. 
                                They can quickly adapt to new environments and find it easy to make new friends. 
                                Extroverts are outgoing nature and enthusiasm can be infectious, allowing them to inspire and motivate those around them.
                            </p>
                            <p className="py-4">
                                While extroverts enjoy social interaction, they may sometimes struggle with tasks that require deep focus and concentration. 
                                Extroverts can become overstimulated in highly stimulating environments, making it difficult for them to maintain their attention on a single task for an extended period. 
                                Additionally, extroverts may have a tendency to talk more than they listen, which can lead to misunderstandings or conflicts if they do not actively work on improving their listening skills. 
                                Extroverts may also find it challenging to recharge and find solitude, as they often prefer being around others.
                            </p>
                            <p>
                                <Link href="https://www.health.com/extroverted-7967128" target="_blank">
                                    <span className="text-cyan-600 font-semibold underline hover:text-cyan-500">Click here</span>
                                </Link>
                                &nbsp;to know more about Extroverts.
                            </p>
                        </div>
                    }
                       
                </div>
            }
        </div>
    </>
  )
}

export default TestResult