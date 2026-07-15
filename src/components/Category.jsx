'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Category({ categories }) {
   const [selected, setSelected] = useState('');

   return (
      <aside className="rounded-2xl border border-default-200 bg-content2 p-5 lg:sticky lg:top-24">
         <div className="mb-5">
            <h2 className="text-xl font-bold">All Categories</h2>
            <p className="mt-1 text-sm text-default-500">Browse books by category</p>
         </div>

         <nav className="space-y-2">
            {categories.map((category) => (
               <Link
                  key={category.id}
                  href={`/main/all-books?category=${category.name.toLowerCase()}`}
                  onClick={() => setSelected(category.name)}
                  className={`block rounded-xl border px-4 py-3 text-sm font-medium transition ${
                     selected === category.name
                        ? 'border-violet-600 text-violet-600 font-bold'
                        : 'border-default-200 bg-content1 text-default-700 hover:bg-default-100'
                  }`}
               >
                  {category.name}
               </Link>
            ))}
         </nav>
      </aside>
   );
}
