'use client';

import { BookOpen, FileText, Video, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Market Analysis',
      items: [
        {
          title: 'Technical Analysis Fundamentals',
          type: 'Guide',
          description: 'Learn the basics of technical analysis and chart patterns.',
          icon: FileText
        },
        {
          title: 'Fundamental Analysis Workshop',
          type: 'Video',
          description: 'Understanding company valuations and financial statements.',
          icon: Video
        }
      ]
    },
    {
      category: 'Trading Guides',
      items: [
        {
          title: 'Options Trading Basics',
          type: 'Guide',
          description: 'Introduction to options trading strategies.',
          icon: FileText
        },
        {
          title: 'Risk Management Principles',
          type: 'Guide',
          description: 'Essential risk management techniques for traders.',
          icon: FileText
        }
      ]
    },
    {
      category: 'Educational Content',
      items: [
        {
          title: 'Market Simulation Tutorial',
          type: 'Video',
          description: 'Step-by-step guide to using our trading simulator.',
          icon: Video
        },
        {
          title: 'Financial Markets Overview',
          type: 'Guide',
          description: 'Comprehensive overview of global financial markets.',
          icon: BookOpen
        }
      ]
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Resources</h1>
          <p className="text-xl max-w-3xl">
            Access our comprehensive collection of trading guides, market analysis tools,
            and educational materials to enhance your financial knowledge.
          </p>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {resources.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <Card key={item.title} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Button className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Access Resource
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}