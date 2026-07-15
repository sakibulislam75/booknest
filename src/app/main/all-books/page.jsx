import { getAllBooks, getAllCategory } from '@/lib/data';
import BookCard from '@/components/BookCard';
import Category from '@/components/Category';
import { Input, Button } from '@heroui/react';
import { Search } from 'lucide-react';

const AllBooks = async ({ searchParams }) => {
   const { category } = await searchParams;
   const books = await getAllBooks();
   const categories = await getAllCategory();
   const filterData = category
      ? books.filter((book) => book.category.toLowerCase() === category.toLowerCase())
      : books;

   return (
      <section className="mx-auto w-11/12 max-w-7xl py-10">
         {/* Header */}
         <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold">All Books</h1>
            <p className="mt-2 text-default-500">
               Browse books by category and borrow your favorite one.
            </p>
         </div>

         {/* Search bar */}
         {/* <form
            action="/main/all-books"
            method="GET"
            className="mx-auto mb-12 flex max-w-xl items-center gap-3"
         >
            <Input
               type="text"
               name="search"
               defaultValue={params?.search || ''}
               placeholder="Search by title, author, or category..."
               radius="full"
               size="lg"
               variant="bordered"
               startContent={<Search size={18} className="text-default-400" />}
               classNames={{
                  inputWrapper:
                     'border-default-200 bg-content1 shadow-sm data-[hover=true]:border-primary',
               }}
               className="flex-1"
            />
            <Button
               type="submit"
               color="primary"
               radius="full"
               size="lg"
               className="px-8 font-medium shadow-sm"
            >
               Search
            </Button>
         </form> */}

         <div className="grid gap-8 lg:grid-cols-12">
            {/* Category */}
            <aside className="lg:col-span-3">
               <Category categories={categories} />
            </aside>

            {/* Books */}
            <main className="lg:col-span-9">
               <h2 className="mb-5 text-xl font-semibold">Available Books</h2>

               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filterData.map((book) => (
                     <BookCard key={book.id} book={book} />
                  ))}
               </div>
            </main>
         </div>
      </section>
   );
};

export default AllBooks;
