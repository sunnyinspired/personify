'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa';

function Testimonial() {
    const [testimonial, setTestimonial] = useState([]);

    const getTestimonials =  () =>{
        axios.get('/api/testimonials')
        .then(responses => {
            setTestimonial(responses.data);
        })
    }
    useEffect(() => {
        getTestimonials();
    }, [])
  return (
    <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            testimonial &&
            testimonial.map((item, index) => 

            <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
            <p className="text-gray-600 mb-4">{item.thoughts}</p>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-cyan-500 rounded-full mr-4 flex items-center justify-center">
                  <FaUser className='text-white text-2xl' />
                </div>
                
                <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
                </div>
            </div>
            </div>
            )
        }
       
      </div>
    </div>
  </section>
  )
}

export default Testimonial