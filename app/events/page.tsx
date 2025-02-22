'use client';

import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function EventsPage() {
  const events = [
    {
      title: 'Market Analysis Workshop',
      date: 'April 15, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'TRS 3-119',
      description: 'Learn fundamental and technical analysis techniques from industry experts.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f'
    },
    {
      title: 'Trading Competition',
      date: 'April 20, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'TRS 2-003',
      description: 'Test your trading skills in our simulated market environment.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3'
    },
    {
      title: 'Networking Night',
      date: 'April 25, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'TRS Lobby',
      description: 'Connect with alumni and industry professionals in finance.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl max-w-3xl">
            Join us for workshops, competitions, and networking opportunities to enhance your
            financial knowledge and career prospects.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.title} className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <Button className="w-full">Register Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}