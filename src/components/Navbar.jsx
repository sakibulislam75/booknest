'use client';
import Image from 'next/image';
import Navlink from './Navlink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import 'animate.css';

const Navbar = () => {
   const { data: session, isPending } = authClient.useSession();
   const user = session?.user;

   return (
      <div className="border-b  w-11/12 mx-auto">
         <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-1">
            {/* Logo only */}
            <div className="flex items-center">
               <Image
                  src="/Designer.png"
                  alt="logo"
                  width={70} // bigger size
                  height={70}
                  priority
                  className="h-18 w-18 object-contain animate__animated animate__pulse animate__infinite rounded-full"
               />
            </div>

            {/* Navigation */}
            <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-sm font-medium">
               <li>
                  <Navlink href="/">Home</Navlink>
               </li>
               <li>
                  <Navlink href="/main/all-books">All Books</Navlink>
               </li>
               <li>
                  <Navlink href="/main/profile">Profile</Navlink>
               </li>
            </ul>

            {/* Auth */}
            <div>
               {isPending ? (
                  <span className="loading loading-spinner loading-lg text-warning"></span>
               ) : user ? (
                  <div className="flex justify-center md:justify-end items-center gap-3">
                     <h2 className="text-sm md:text-base font-semibold">Hello, {user.name}</h2>
                     <Link href="/">
                        <Image
                           src={user?.image || '/Designer.png'}
                           alt="User Avatar"
                           width={40}
                           height={40}
                           className="rounded-full border border-gray-300 animate__animated animate__zoomIn"
                        />
                     </Link>
                     <Button
                        onClick={async () => await authClient.signOut()}
                        variant="danger"
                        size="sm"
                     >
                        Log-Out
                     </Button>
                  </div>
               ) : (
                  <ul className="flex items-center gap-4 text-sm font-medium">
                     <li>
                        <Navlink href="/auth/signup">SignUp</Navlink>
                     </li>
                     <li>
                        <Navlink href="/auth/signin">SignIn</Navlink>
                     </li>
                  </ul>
               )}
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
