import React from 'react'
import Link from "next/link";
function Introvert() {
  return (
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
  )
}

export default Introvert