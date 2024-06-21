import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main>
        {/* Hero Section */}
        <section className="bg-cyan-600 text-white">
          <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your True Self</h1>
              <p className="text-xl mb-8">Our professionally validated tests can provide insights into your personality.</p>
              <button className="bg-white text-cyan-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                Take a Test
              </button>
            </div>
            <div className="md:w-1/2 p-0">
              <Image src="/images/ra2.png" 
                alt="Personality Illustration" 
                width={600} 
                height={400} 
                className='shadow rounded-[50%]'
                
                />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Personify?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl text-cyan-600 mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Scientifically Backed</h3>
                <p className="text-gray-600">Our tests are based on well-established psychological models and research.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl text-cyan-600 mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Quick and Easy</h3>
                <p className="text-gray-600">Get insightful results in just a few minutes with our user-friendly interface.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl text-cyan-600 mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Private and Secure</h3>
                <p className="text-gray-600">Your data is encrypted and never shared. Your privacy is our top priority.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"Personify improved my understanding of who I am. My self-awareness has significantly enhanced as a result of the spot-on observations"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Olumide A.</h4>
                    <p className="text-sm text-gray-500">Marketing Specialist</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"At first, I was doubtful, but the outcomes were remarkably precise. It has assisted me in choosing a better job path."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Isah N.</h4>
                    <p className="text-sm text-gray-500">Operations Engineer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"Our company culture has completely changed as a result of the team compatibility test. Highly recommended!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Ikechukwu M.</h4>
                    <p className="text-sm text-gray-500">Senior HR Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Personality?</h2>
            <p className="text-xl mb-8">Take our free personality test and gain valuable insights today.</p>
            <button className="bg-white text-cyan-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Start Free Test
            </button>
          </div>
        </section>
      </main>

      
    </div>
  );
}