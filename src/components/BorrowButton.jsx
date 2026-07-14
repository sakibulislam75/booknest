'use client';

import { Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function BorrowButton() {
   const router = useRouter();

   const { data: session } = authClient.useSession();

   const user = session?.user;

   const handleBorrowBook = () => {
      if (!user) {
         toast.warning('Please log in first.');
         router.push('/auth/signin');
         return;
      }

      toast.success('Borrow request submitted successfully!');
   };

   return (
      <Button color="primary" radius="full" size="lg" onPress={handleBorrowBook}>
         Borrow Book
      </Button>
   );
}
