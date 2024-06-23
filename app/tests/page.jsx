'use client'
import { ScoreContext } from "@/utils/context/scoreContext"
import Link from "next/link"
import { useContext, useEffect } from "react"


function Test() {
    const { setScores } = useContext(ScoreContext)

    useEffect(() =>{
        //resets score to empty array one this page loads
        setScores([])
    }, [])
  return (
    <div className="text-center py-32 px-3">
        <h1 className="text-4xl font-bold mb-8">Personality Test</h1>
        <p className="mb-10">Find out if you&apos;re an 
            <span className="text-cyan-600 font-bold text-xl"> Introvert </span> 
            or an <span className="text-cyan-600 font-bold text-xl"> Extrovert! </span></p>
        <Link href="/tests/questions" 
            className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-4 px-6 rounded">
            Start Test
        </Link>
      </div>
  )
}

export default Test