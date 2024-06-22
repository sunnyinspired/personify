import Link from "next/link"


function Test() {
    
  return (
    <div className="text-center py-32 px-3">
        <h1 className="text-4xl font-bold mb-8">Personality Test</h1>
        <p className="mb-10">Find out if you're an 
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