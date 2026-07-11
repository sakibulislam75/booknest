import React from 'react';

import { getAllBooks } from '@/lib/data';
import BookCard from '@/components/BookCard';

const FeaturedBooks = async () => {
   const allBooks = await getAllBooks();
   const featured = allBooks.slice(0, 4); // ✅ top 4 books

   return (
      <section className="w-11/12 mx-auto my-12">
         <h1 className="font-bold text-3xl mb-8 text-gray-900 dark:text-white">Featured Books</h1>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featured.map((book) => (
               <BookCard key={book.id} book={book} />
            ))}
         </div>
      </section>
   );
};

export default FeaturedBooks;
