'use client';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }) => {
   return (
      <Card className="relative border-none shadow-none bg-[#FBF8F3] rounded-3xl p-6 flex flex-col items-center text-center group">
         {/* Category at top-right */}
         <span className="absolute top-4 right-4 bg-[#E3E9F5] text-[#1B2340] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {book.category}
         </span>

         {/* Image with circular backdrop */}
         <div className="relative w-[168px] h-[168px] mb-5">
            <div className="absolute inset-0 rounded-full bg-[#E3E9F5] transition-colors duration-300 group-hover:bg-[#D6DFF2]" />
            <Image
               src={book.image_url || '/default-book.jpg'}
               alt={book.title}
               width={128}
               height={182}
               unoptimized
               className="absolute left-1/2 -translate-x-1/2 -bottom-3.5 w-32 h-[182px] object-cover rounded-md shadow-[0_16px_28px_-10px_rgba(27,35,64,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:-translate-x-1/2"
            />
         </div>

         {/* Title */}
         <h2 className="mt-1 text-sm text-gray-500 line-clamp-1">{book.title}</h2>

         {/* CTA Button */}
         <Link href={`/main/all-books/${book.id}`} className="w-full mt-4">
            <Button
               variant="outline"
               className="w-full rounded-full font-semibold border-[1.5px] border-[#1B2340] text-[#1B2340] hover:bg-[#1B2340] hover:text-white transition-colors duration-200"
            >
               View Details
            </Button>
         </Link>
      </Card>
   );
};

export default BookCard;
