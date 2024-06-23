import Image from 'next/image';
import Testimonial from './components/testimonials/Testimonial';
import Link from 'next/link';

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
              <Link href="/tests" 
                className="bg-white text-cyan-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                Take a Test
              </Link>
            </div>
            <div className="md:w-1/2 p-0">
              <Image src="/images/personality.png" 
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
       
        <Testimonial />

        {/* CTA Section */}
        <section className="bg-cyan-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Personality?</h2>
            <p className="text-xl mb-8">Take our free personality test and gain valuable insights today.</p>
            <Link href="/tests"  className="bg-white text-cyan-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Start Free Test
            </Link>
          </div>
        </section>
      </main>

      
    </div>
  );
}