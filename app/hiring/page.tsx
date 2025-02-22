'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Replace these with your actual Google Docs form links
const googleDocsURLAnalyst = 'https://docs.google.com/...analyst-form...';
const googleDocsURLNonAnalyst = 'https://docs.google.com/...non-analyst-form...';

export default function HiringPage() {
  // Analyst roles (original set)
  const analystPositions = [
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

  // Non-Analyst roles (new set)
  const nonAnalystPositions = [
    {
      title: 'Content Development Specialist',
      description: `
        In this role you will be tasked with brainstorming, planning, managing and 
        creating content for TRST social media. You will work with the marketing team 
        to expand our reach and engage with students effectively.
      `,
    },
    {
      title: 'Events Associate (2)',
      description: `
        As an Events Associate, you will be tasked with planning, managing and budgeting events 
        in tandem with the Events team. Furthermore, you will be expected to attend events 
        and take on a support role.
      `,
    },
    {
      title: 'Corporate Relations Manager',
      description: `
        As Corporate Relations Manager, you will lead initiatives to strengthen partnerships 
        and expand the club's network within the business community. Responsibilities include 
        coordinating with industry professionals, securing sponsorships, and organizing events 
        that connect students with corporate partners.
      `,
    },
  ];

  return (
    <main className="pt-16">
      {/* --- Analyst Roles Section --- */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ted Rogers Sales &amp; Trading Analyst Hiring Form for Winter/Fall 2025 🚀
          </h1>
          <p className="text-xl max-w-3xl">
            We hope this message finds you well. We are excited to announce that the 
            Ted Rogers Sales &amp; Trading Club is currently seeking enthusiastic, 
            dedicated, and motivated individuals to join our analyst team!
          </p>
        </div>
      </section>

      {/* Analyst Positions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Open Analyst Roles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {analystPositions.map((pos) => (
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
                    <Link
                      href={googleDocsURLAnalyst}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full">Apply for this Role</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analyst Info Section */}
      <section className="pb-16 max-w-6xl mx-auto px-4">
        <div className="bg-blue-50 p-6 rounded-md">
          <p className="text-gray-800 mb-4">
            We encourage you to apply! To submit your application, please fill out the form below and attach your resume.
            The deadline for applications is <strong>March 5th, 2025 11:59PM</strong>. We will review all submissions,
            but only successful candidates after screening will be selected for interviews.
          </p>
          <Link
            href={googleDocsURLAnalyst}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Fill Out the Application Form
            </Button>
          </Link>
        </div>
      </section>

      {/* --- Non-Analyst Roles Section --- */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ted Rogers Sales &amp; Trading Hiring Form for Winter/Fall 2025 🚀
          </h1>
          <p className="text-xl max-w-3xl">
            We hope this message finds you well. We are excited to announce that the 
            Ted Rogers Sales &amp; Trading Club is currently seeking enthusiastic 
            and dedicated individuals to join our various team! As our club continues 
            to grow and evolve, we need creative and skilled students to help our club 
            grow to new heights.
          </p>
          <p className="text-xl max-w-3xl mt-4">
            Any and all members of TMU are eligible to apply, program and major DOES NOT matter!
          </p>
        </div>
      </section>

      {/* Non-Analyst Positions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Additional Roles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {nonAnalystPositions.map((pos) => (
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
                    <Link
                      href={googleDocsURLNonAnalyst}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full">Apply for this Role</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Analyst Info Section */}
      <section className="pb-16 max-w-6xl mx-auto px-4">
        <div className="bg-blue-50 p-6 rounded-md">
          <p className="text-gray-800 mb-4">
            We encourage you to apply! To submit your application, please fill out the form below and attach your resume.
            The deadline for applications is <strong>March 5th, 2025 11:59PM</strong>. We will review all submissions
            and reach out to shortlisted candidates for an interview.
          </p>
          <p className="text-gray-800 mb-4">
            If you have any questions about the available roles or the application process, 
            please don't hesitate to contact us at <strong>tenzing.amji@torontomu.ca</strong>
          </p>
          <Link
            href={googleDocsURLNonAnalyst}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Fill Out the Application Form
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
