'use client';

import { Calendar, User, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function BlogPage() {
  const posts = [
    {
      title: 'Understanding Market Volatility',
      excerpt: 'A deep dive into what causes market volatility and how traders can navigate turbulent times.',
      author: 'Sarah Chen',
      date: 'March 28, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f'
    },
    {
      title: 'The Rise of ESG Investing',
      excerpt: 'Exploring the growing importance of Environmental, Social, and Governance factors in investment decisions.',
      author: 'Michael Rodriguez',
      date: 'March 25, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1623227866882-c005c26dfe41'
    },
    {
      title: 'Cryptocurrency Trading Basics',
      excerpt: 'An introduction to cryptocurrency markets and fundamental trading strategies.',
      author: 'Emily Wong',
      date: 'March 22, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">TRST Blog</h1>
          <p className="text-xl max-w-3xl">
            Stay updated with the latest insights, market analysis, and trading strategies
            from our team of experts and guest contributors.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
                alt="Featured post"
                className="h-full object-cover"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  The Future of Algorithmic Trading
                </h2>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    March 30, 2024
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    John Smith
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    8 min read
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Explore how artificial intelligence and machine learning are revolutionizing
                  the way we trade in financial markets. From high-frequency trading to
                  predictive analytics, discover the technologies shaping the future of finance.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Read More →
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.title} className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Read More →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}