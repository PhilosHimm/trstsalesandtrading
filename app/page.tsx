'use client';

import Link from 'next/link';
import { LineChart, TrendingUp, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('/trstbanner.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 to-green-900/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ted Rogers Sales & Trading</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Exploring the world of finance and empowering students with knowledge of global markets
          </p>
          <Link href="/hiring">
            <Button size="lg" variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
              Join TRST Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-700">What We Offer</h2>
            <Separator className="my-4 mx-auto w-24 bg-blue-600" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <LineChart className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-xl text-center text-green-700">Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Learn to analyze market trends and make informed trading decisions
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-xl text-center text-green-700">Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Connect with industry professionals and like-minded students
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <BookOpen className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-xl text-center text-green-700">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Access workshops, seminars, and hands-on trading simulations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-700">About TRST</h2>
              <Separator className="my-4 w-24 bg-blue-600" />
              <p className="text-gray-600 mb-6">
                At Ted Rogers Sales & Trading, we are dedicated to fostering a deep understanding of 
                financial markets among students. Our organization provides hands-on experience, 
                expert insights, and valuable networking opportunities in the world of trading.
              </p>
              <Button 
                variant="outline" 
                className="border-green-700 text-green-700 hover:bg-green-50"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
                alt="Trading floor"
                className="object-cover w-full h-[400px]"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/trstbanner.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <Separator className="my-4 mx-auto w-24 bg-white" />
          <p className="text-xl mb-8">
            Join TRST today and take your first step towards mastering financial markets
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}