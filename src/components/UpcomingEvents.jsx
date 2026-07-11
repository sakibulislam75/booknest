'use client';
import { ArrowUpRight } from 'lucide-react';

const events = [
   {
      id: 1,
      day: '25',
      month: 'JUL',
      year: '2026',
      title: 'Book Launch: The Hidden Path',
      description: 'Join us for the grand launch of "The Hidden Path" with author Q&A.',
      tag: 'Launch',
   },
   {
      id: 2,
      day: '10',
      month: 'AUG',
      year: '2026',
      title: 'Author Meetup: Sarah Khan',
      description: 'An interactive session with Sarah Khan discussing her latest works.',
      tag: 'Meetup',
   },
   {
      id: 3,
      day: '20',
      month: 'SEP',
      year: '2026',
      title: 'Virtual Book Fair',
      description: 'Explore hundreds of books and connect with authors in our online book fair.',
      tag: 'Fair',
   },
   {
      id: 4,
      day: '05',
      month: 'OCT',
      year: '2026',
      title: 'Poetry Night',
      description: 'An evening of poetry readings and discussions with emerging poets.',
      tag: 'Event',
   },
];

const UpcomingEvents = () => {
   return (
      <section className="w-11/12 max-w-5xl mx-auto mt-26">
         <div className="flex items-end justify-between mb-12 border-b border-[#1B2340]/10 pb-6">
            <div>
               <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-2">
                  What's on
               </p>
               <h2 className="text-3xl md:text-4xl font-semibold text-[#1B2340] tracking-tight">
                  Upcoming Events
               </h2>
            </div>
            <span className="hidden md:block text-sm text-gray-400">{events.length} scheduled</span>
         </div>

         <div className="divide-y divide-[#1B2340]/10">
            {events.map((event) => (
               <a
                  key={event.id}
                  href="#"
                  className="group flex flex-col md:flex-row md:items-center gap-6 py-8 first:pt-0 last:pb-0"
               >
                  {/* Date block */}
                  <div className="flex md:flex-col items-baseline md:items-start gap-2 md:gap-0 md:w-24 shrink-0">
                     <span className="text-4xl font-semibold text-[#1B2340] tabular-nums leading-none">
                        {event.day}
                     </span>
                     <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                        {event.month} {event.year}
                     </span>
                  </div>

                  {/* Divider (desktop only) */}
                  <div className="hidden md:block w-px self-stretch bg-[#1B2340]/10" />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                     <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-[#1B2340]/60 mb-1.5">
                        {event.tag}
                     </span>
                     <h3 className="text-lg font-semibold text-[#1B2340] mb-1 group-hover:underline decoration-1 underline-offset-4">
                        {event.title}
                     </h3>
                     <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                        {event.description}
                     </p>
                  </div>

                  {/* Arrow */}
                  <div className="shrink-0 self-start md:self-center">
                     <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1B2340]/15 text-[#1B2340] transition-all duration-200 group-hover:bg-[#1B2340] group-hover:text-white group-hover:border-[#1B2340]">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                     </span>
                  </div>
               </a>
            ))}
         </div>
      </section>
   );
};

export default UpcomingEvents;
