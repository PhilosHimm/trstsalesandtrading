'use client';

import { LineChart, TrendingUp, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ted Rogers Sales & Trading</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Exploring the world of finance and empowering students with knowledge of global markets
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Join TRST Today
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <LineChart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
              <p className="text-gray-600">
                Learn to analyze market trends and make informed trading decisions
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Networking</h3>
              <p className="text-gray-600">
                Connect with industry professionals and like-minded students
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600">
                Access workshops, seminars, and hands-on trading simulations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About TRST</h2>
              <p className="text-gray-600 mb-6">
                At Ted Rogers Sales & Trading, we are dedicated to fostering a deep understanding of 
                financial markets among students. Our organization provides hands-on experience, 
                expert insights, and valuable networking opportunities in the world of trading.
              </p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
              alt="Trading floor"
              className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Join TRST today and take your first step towards mastering financial markets
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}