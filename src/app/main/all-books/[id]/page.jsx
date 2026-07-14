import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import { getAllBooks } from '@/lib/data';
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import BorrowButton from '@/components/BorrowButton';

const BookDetails = async ({ params }) => {
   const { id } = await params;

   const books = await getAllBooks();
   const book = books.find((item) => item.id == id);

   return (
      <section className="mx-auto w-11/12 max-w-7xl py-12">
         <Card className="border border-default-200 p-6 shadow-lg lg:p-10">
            <div className="grid items-start gap-10 lg:grid-cols-2">
               {/* Book Image */}
               <div className="flex justify-center">
                  <Image
                     src={book.image_url || '/default-book.jpg'}
                     alt={book.title}
                     width={340}
                     height={500}
                     priority
                     className="rounded-2xl object-cover shadow-2xl transition duration-300 hover:scale-105"
                  />
               </div>

               {/* Book Details */}
               <div className="space-y-6">
                  <Chip color="primary" variant="flat">
                     {book.category}
                  </Chip>

                  <div>
                     <h1 className="text-4xl font-bold leading-tight lg:text-5xl">{book.title}</h1>

                     <p className="mt-3 text-lg text-default-500">
                        By <span className="font-semibold text-default-800">{book.author}</span>
                     </p>
                  </div>

                  <hr className="border-default-200" />

                  <div className="grid grid-cols-2 gap-5 rounded-xl bg-default-100 p-5">
                     <div>
                        <p className="text-sm text-default-500">Category</p>
                        <p className="mt-1 font-semibold">{book.category}</p>
                     </div>

                     <div>
                        <p className="text-sm text-default-500">Available</p>
                        <p className="mt-1 font-semibold text-success">
                           {book.available_quantity} Copies
                        </p>
                     </div>
                  </div>

                  <div>
                     <h2 className="mb-3 text-xl font-semibold">Description</h2>

                     <p className="leading-8 text-default-600">{book.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                     <BorrowButton />

                     <Button variant="outline" radius="full" size="lg">
                        Add to Wishlist
                     </Button>
                  </div>
               </div>
            </div>
         </Card>
      </section>
   );
};

export default BookDetails;
