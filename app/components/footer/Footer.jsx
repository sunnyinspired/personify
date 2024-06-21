import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Personify</div>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Personify. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer