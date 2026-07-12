import React from 'react';

import { getAllBooks } from '@/lib/data';
import BookCard from '@/components/BookCard';

const AllBooks = async () => {
   const allBooks = await getAllBooks();
   return (
      <section className="w-11/12 mx-auto my-12">
         <h1 className="font-bold text-3xl mb-8 text-gray-900 dark:text-white">All Books</h1>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {allBooks.map((book) => (
               <BookCard key={book.id} book={book} />
            ))}
         </div>
      </section>
   );
};

export default AllBooks;
