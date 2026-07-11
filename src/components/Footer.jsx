'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// ✅ Pre-compute year outside the component to avoid hydration mismatch
const year = new Date().getFullYear();

const Footer = () => {
   return (
      <footer className="relative mt-24 w-full">
         {/* Divider */}
         <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

         {/* Background Layer */}
         <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

         {/* Subtle Gradient Glow */}
         <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl" />

         {/* Content (centered inside full width) */}
         <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               {/* Brand */}
               <div className="space-y-4">
                  <div className="flex items-center gap-2">
                     <Image
                        src="/Designer.png"
                        alt="BookNest logo"
                        width={40}
                        height={40}
                        className="dark:brightness-200 rounded-md"
                     />
                     <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                        BookNest
                     </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
                     Discover, organize, and cherish your favorite books in one place.
                  </p>
               </div>

               {/* Explore */}
               <div>
                  <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Explore</h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                     <li>
                        <Link
                           href="/library"
                           className="hover:text-black dark:hover:text-white transition"
                        >
                           Library
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/pricing"
                           className="hover:text-black dark:hover:text-white transition"
                        >
                           Pricing
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/profile"
                           className="hover:text-black dark:hover:text-white transition"
                        >
                           Profile
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Company */}
               <div>
                  <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Company</h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                     <li>
                        <Link
                           href="/about"
                           className="hover:text-black dark:hover:text-white transition"
                        >
                           About Us
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/contact"
                           className="hover:text-black dark:hover:text-white transition"
                        >
                           Contact Us
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/terms"
                           className="hover:text-black dark:hover:text-white transition"
                        >
                           Terms
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* CTA + Social */}
               <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-black dark:text-white">
                     Stay Connected
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                     Follow us on social media
                  </p>

                  <div className="flex gap-4 text-lg text-gray-600 dark:text-gray-400">
                     <Link
                        href="https://facebook.com"
                        target="_blank"
                        className="hover:text-blue-600 transition"
                     >
                        <FaFacebookF />
                     </Link>
                     <Link
                        href="https://twitter.com"
                        target="_blank"
                        className="hover:text-sky-500 transition"
                     >
                        <FaTwitter />
                     </Link>
                     <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="hover:text-pink-500 transition"
                     >
                        <FaInstagram />
                     </Link>
                     <Link
                        href="https://linkedin.com"
                        target="_blank"
                        className="hover:text-blue-700 transition"
                     >
                        <FaLinkedinIn />
                     </Link>
                  </div>

                  <Link
                     href="/signup"
                     className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
                  >
                     Get Started
                  </Link>
               </div>
            </div>

            {/* Divider */}
            <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

            {/* Bottom */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
               <p>© {year} BookNest. All rights reserved.</p>
               <div className="flex items-center gap-6">
                  <Link
                     href="/privacy"
                     className="hover:text-black dark:hover:text-white transition"
                  >
                     Privacy
                  </Link>
                  <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
                     Terms
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
