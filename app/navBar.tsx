'use client';

import { useState } from 'react';
import Link from 'next/link';
// Optional: import the Lucide Menu icon (or any other icon library you prefer)
import { Menu } from 'lucide-react';

export default function NavBar() {
  // Tracks whether the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <img
            src="/trstlogoicon.png"
            alt="TRST icon"
            className="h-20 w-20 object-contain"
          />
        </Link>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-900">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-900">About</Link>
          <Link href="/events" className="text-gray-600 hover:text-blue-900">Events</Link>
          <Link href="/resources" className="text-gray-600 hover:text-blue-900">Resources</Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-900">Blog</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-900">Contact</Link>
        </div>

        {/* Hamburger Button (visible on mobile only) */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Replace with your preferred icon */}
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu (shown only when isOpen = true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/events"
              className="text-gray-600 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
