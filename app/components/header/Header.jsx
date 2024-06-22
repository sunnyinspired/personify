'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-4xl font-[900] text-cyan-600 uppercase">
            <Link href='/'>
              Personify
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 font-bold">
            <Link href="/"className="text-gray-600 hover:text-cyan-600">Home</Link>
            <Link href="/tests"className="text-gray-600 hover:text-cyan-600">Tests</Link>
            <Link href="/about"className="text-gray-600 hover:text-cyan-600">About</Link>
            <Link href="/contact"className="text-gray-600 hover:text-cyan-600">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-cyan-600 focus:outline-none focus:text-cyan-600"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <Link href="/"className="block py-2 text-gray-600 hover:text-cyan-600">Home</Link>
            <Link href="/tests"className="block py-2 text-gray-600 hover:text-cyan-600">Tests</Link>
            <Link href="/about"className="block py-2 text-gray-600 hover:text-cyan-600">About</Link>
            <Link href="/contact"className="block py-2 text-gray-600 hover:text-cyan-600">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}