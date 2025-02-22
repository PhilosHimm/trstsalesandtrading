'use client';

import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Replace with your actual Google Docs form link
const googleDocsURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfoc-t1sm8THcLgnfU17sYSVGwZUVkEM7qa_ev91U-u_Npl0A/viewform';

export default function HiringPage() {
  const positions = [
    {
      title: 'Equity Analysts (3)',
      description: `
        In this role you will be placed in a team of 3 (including your PM) and work together 
        to pitch a stock. This will include equity research and financial valuations.
      `,
    },
    {
      title: 'Forex Portfolio Manager',
      description: `
        As a Forex PM, you will be tasked with leading, supervising, and managing your analysts' work. 
        This role requires significant knowledge of Forex markets.
      `,
    },
    {
      title: 'Forex Analysts (2)',
      description: `
        In this role, you’ll be placed in a team of 3 (including your PM) and collaborate 
        to pitch a currency. This will involve qualitative analysis of currency prices 
        and technical analysis.
      `,
    },
    {
      title: 'Commodities Portfolio Manager',
      description: `
        As a Commodities PM, you will be tasked with leading, supervising, and managing your analysts' work. 
        This role requires significant knowledge of commodity markets.
      `,
    },
    {
      title: 'Commodity Analysts (2)',
      description: `
        In this role, you’ll be placed in a team of 3 (including your PM) and work together 
        to pitch a commodity. This includes fundamental commodity analysis and financial analysis.
      `,
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ted Rogers Sales & Trading Analyst Hiring Form for Winter/Fall 2025 🚀
          </h1>
          <p className="text-xl max-w-3xl">
            We hope this message finds you well. We are excited to announce that the 
            Ted Rogers Sales &amp; Trading Club is currently seeking enthusiastic, 
            dedicated, and motivated individuals to join our analyst team!
          </p>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Open Roles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((pos) => (
              <Card key={pos.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{pos.title}</h3>
                    <p className="text-gray-600 mb-4 whitespace-pre-line">
                      {pos.description}
                    </p>
                    <Link href={googleDocsURL} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">Apply for this Role</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="pb-16 max-w-6xl mx-auto px-4">
        <div className="bg-blue-50 p-6 rounded-md">
          <p className="text-gray-800 mb-4">
            We encourage you to apply! To submit your application, please fill out the form below and attach your resume.
            The deadline for applications is <strong>March 5th, 2025 11:59PM</strong>. We will review all submissions,
            but only successful candidates after screening will be selected for interviews.
          </p>
          <Link href={googleDocsURL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Fill Out the Application Form
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
