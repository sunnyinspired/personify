import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-600 mb-8 text-center">About Personify</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Personify - Your Gateway to Self-Discovery!
            </p>
            
            <p className="text-gray-600 mb-6">
              At Personify, we believe that understanding yourself is the first step towards personal growth and success. 
              Our mission is to provide you with insightful, scientifically-backed personality assessments that illuminate 
              your unique traits, strengths, and potential areas for development.
            </p>
            
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">What Sets Us Apart:</h2>
            
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><span className="font-semibold">Scientific Rigor:</span> Our tests are grounded in established psychological theories and validated by experts in the field of personality psychology.</li>
              <li><span className="font-semibold">User-Friendly Experience:</span> We&apos;ve designed our platform to be intuitive and engaging, making self-discovery an enjoyable journey.</li>
              <li><span className="font-semibold">Comprehensive Insights:</span> Our assessments don&apos;t just label you; they provide nuanced explanations of your personality traits and how they manifest in various aspects of your life.</li>
              <li><span className="font-semibold">Actionable Results:</span> We don&apos;t stop at analysis. Each assessment comes with personalized recommendations to help you leverage your strengths and navigate challenges.</li>
              <li><span className="font-semibold">Privacy First:</span> Your personal information and test results are kept strictly confidential. We believe that your journey of self-discovery should be on your terms.</li>
            </ul>
            
            <p className="text-gray-600 mb-6">
              Whether you&apos;re a curious individual looking to understand yourself better, a professional seeking to enhance your career prospects, or a team leader aiming to improve group dynamics, Personify offers valuable insights to guide your path.
            </p>
            
            <p className="text-gray-600 mb-8">
              Embark on your journey of self-discovery with Personify today. Uncover the unique constellation of traits that make you who you are, and learn how to harness your potential to its fullest.
            </p>
            
            <div className="text-center">
              <p className="text-xl font-semibold text-cyan-700">
                Personify: Understand Yourself, Empower Your Future.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/tests" className="inline-block bg-cyan-600 text-white font-bold py-3 px-6 rounded-full hover:bg-cyan-700 transition duration-300">
            Take a Test Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;