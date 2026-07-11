import BannerSlider from '@/components/Banner';
import BookMarquee from '@/components/BookMarquee';
import Image from 'next/image';
import { DiVim } from 'react-icons/di';

export default function Home() {
   return (
      <div>
         <BannerSlider />
         <BookMarquee />
      </div>
   );
}
