'use client';
import { UpdateInfo } from '@/components/UpdateInfo';
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';

const Profile = () => {
   const { data: session, isPending } = authClient.useSession();
   const user = session?.user;

   if (isPending) {
      return (
         <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-warning"></span>
         </div>
      );
   }

   return (
      <div className="h-[82vh] w-full flex items-start sm:items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 pt-10 sm:pt-0 pb-10">
         <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center gap-4 sm:gap-5 md:gap-6 shadow-2xl border border-gray-100 rounded-3xl">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-primary shrink-0">
               <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center w-full px-2">
               <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 break-words">
                  {user.name}
               </p>
               <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1 sm:mt-2 break-all">
                  {user.email}
               </p>
            </div>
            <UpdateInfo />
         </Card>
      </div>
   );
};

export default Profile;
