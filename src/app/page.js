import BannerSlider from '@/components/Banner';
import BookMarquee from '@/components/BookMarquee';
import Image from 'next/image';
import { DiVim } from 'react-icons/di';
import FeaturedBooks from './main/featured-books/page';
import MembershipPlans from '@/components/MemberShipPlan';
import UpcomingEvents from '@/components/UpcomingEvents';

export default function Home() {
   return (
      <div>
         <BannerSlider />
         <BookMarquee />
         <FeaturedBooks></FeaturedBooks>
         <MembershipPlans />
         <UpcomingEvents />
      </div>
   );
}
