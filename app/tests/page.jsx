import Link from "next/link"


function Test() {
    
  return (
    <div className="text-center py-32">
        <h1 className="text-4xl font-bold mb-8">Personality Test</h1>
        <p className="mb-8">Discover if you're an introvert or an extrovert!</p>
        <Link href="/tests/questions" 
            className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded">
            Start Test
        </Link>
      </div>
  )
}

export default Test