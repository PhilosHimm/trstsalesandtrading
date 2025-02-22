import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ted Rogers Sales & Trading',
  description: 'Exploring the world of finance and helping students understand global markets',
};

import NavBar from './navBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        {/* Footer, etc. */}
      </body>
    </html>
  );
}
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
//           <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
//           <Link href="/" className="flex items-center">
//             <img
//               src="/trsticon.jpg"
//               alt="TRST icon"
//               className="h-8 w-8 object-contain"
//             />
//           </Link>
//             <div className="hidden md:flex space-x-8">
//               <Link href="/" className="text-gray-600 hover:text-blue-900">Home</Link>
//               <Link href="/about" className="text-gray-600 hover:text-blue-900">About</Link>
//               <Link href="/events" className="text-gray-600 hover:text-blue-900">Events</Link>
//               <Link href="/resources" className="text-gray-600 hover:text-blue-900">Resources</Link>
//               <Link href="/blog" className="text-gray-600 hover:text-blue-900">Blog</Link>
//               <Link href="/contact" className="text-gray-600 hover:text-blue-900">Contact</Link>
//             </div>
//           </div>
//         </nav>
//         {children}
//         <footer className="bg-gray-900 text-white py-12">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="grid md:grid-cols-4 gap-8">
//               <div>
//                 <h3 className="font-bold text-lg mb-4">TRST</h3>
//                 <p className="text-gray-400">
//                   Empowering students through financial education and market insights.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//                 <ul className="space-y-2">
//                   <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
//                   <li><Link href="/events" className="text-gray-400 hover:text-white">Events</Link></li>
//                   <li><Link href="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
//                   <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="font-bold text-lg mb-4">Resources</h3>
//                 <ul className="space-y-2">
//                   <li><Link href="/resources" className="text-gray-400 hover:text-white">Market Analysis</Link></li>
//                   <li><Link href="/resources" className="text-gray-400 hover:text-white">Trading Guides</Link></li>
//                   <li><Link href="/events" className="text-gray-400 hover:text-white">Workshops</Link></li>
//                   <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="font-bold text-lg mb-4">Connect</h3>
//                 <ul className="space-y-2">
//                   <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a></li>
//                   <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a></li>
//                   <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a></li>
//                   <li><Link href="/contact" className="text-gray-400 hover:text-white">Email</Link></li>
//                 </ul>
//               </div>
//             </div>
//             <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
//               <p>© {new Date().getFullYear()} Ted Rogers Sales & Trading. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </body>
//     </html>
//   );
// }