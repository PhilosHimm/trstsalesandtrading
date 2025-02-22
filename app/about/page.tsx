'use client';

import { Building, Users, Target, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TRST</h1>
          <p className="text-xl max-w-3xl">
            Ted Rogers Sales & Trading is a student-led organization dedicated to fostering financial literacy
            and market understanding among future business leaders.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-8">
                We strive to bridge the gap between academic theory and real-world trading practices,
                providing students with hands-on experience and valuable industry insights. Through
                workshops, networking events, and practical training, we prepare our members for
                successful careers in financial markets.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="text-blue-600 h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Excellence</h3>
                    <p className="text-gray-600">Striving for the highest standards in everything we do</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-blue-600 h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Collaboration</h3>
                    <p className="text-gray-600">Working together to achieve common goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="text-blue-600 h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Innovation</h3>
                    <p className="text-gray-600">Embracing new ideas and approaches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'President',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
              },
              {
                name: 'Michael Rodriguez',
                role: 'Vice President',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
              },
              {
                name: 'Emily Wong',
                role: 'Director of Events',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
              },
            ].map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}