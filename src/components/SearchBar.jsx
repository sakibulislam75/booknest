import { Button, Input } from '@heroui/react';

const SearchBar = () => {
   return (
      <form
         action="/main/all-books"
         method="GET"
         className="mx-auto mb-12 flex max-w-xl items-center gap-3"
      >
         <Input
            name="search"
            placeholder="Search book by title..."
            radius="full"
            size="lg"
            variant="bordered"
            className="flex-1"
         />

         <Button type="submit" color="primary" radius="full">
            Search
         </Button>
      </form>
   );
};

export default SearchBar;
