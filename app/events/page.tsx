'use client';

import { Calendar, MapPin, Clock, Users, ArrowRight, History } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type EventType = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
};

export default function EventsPage() {
  const upcomingEvents = [
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
    },
    {
      title: 'Forex Trading Masterclass',
      date: 'May 5, 2024',
      time: '3:00 PM - 5:00 PM',
      location: 'TRS 3-129',
      description: 'Deep dive into forex markets with experienced traders.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e'
    }
  ];

  const pastEvents = [
    {
      title: 'Investment Banking Panel',
      date: 'March 1, 2024',
      time: '5:00 PM - 7:00 PM',
      location: 'TRS 1-148',
      description: 'Industry professionals shared insights about investment banking careers.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
    },
    {
      title: 'Bloomberg Terminal Workshop',
      date: 'February 15, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'TRS Trading Lab',
      description: 'Hands-on training session on using Bloomberg Terminal.',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7'
    },
    {
      title: 'Stock Pitch Competition',
      date: 'February 1, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'TRS Auditorium',
      description: 'Annual competition where teams presented their best stock picks.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f'
    },
    {
      title: 'ESG Investing Seminar',
      date: 'January 20, 2024',
      time: '3:00 PM - 5:00 PM',
      location: 'TRS 3-119',
      description: 'Discussion on sustainable investing strategies and ESG factors.',
      image: 'https://images.unsplash.com/photo-1623227866882-c005c26dfe41'
    }
  ];

  const EventCard = ({ event }: { event: EventType }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-green-700">{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{event.description}</p>
        <Button className="w-full bg-green-600 hover:bg-green-700">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">TRST Events</h1>
          <p className="text-xl max-w-3xl">
            Join us for workshops, competitions, and networking opportunities to enhance your
            financial knowledge and career prospects.
          </p>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="upcoming" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="upcoming" className="text-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger value="past" className="text-lg">
                  <History className="h-5 w-5 mr-2" />
                  Past Events
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-green-700">Upcoming Events</h2>
                <Separator className="my-4 mx-auto w-24 bg-blue-600" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.title} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-green-700">Past Events</h2>
                <Separator className="my-4 mx-auto w-24 bg-blue-600" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {pastEvents.map((event) => (
                  <EventCard key={event.title} event={event} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}