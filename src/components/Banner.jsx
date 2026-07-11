'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@heroui/react';
import { MoveRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'animate.css';

export default function BannerSlider() {
   const banners = [
      {
         image: '/banner.jpg',
         title: 'Every Book Opens a New World',
      },
      {
         image: '/banner2.jpg',
         title: 'Where Readers Belong',
      },
      {
         image: '/banner3.jpg',
         title: 'Read More. Imagine More.',
      },
      {
         image: '/banner4.jpg',
         title: 'Find Your Next Great Story',
      },
   ];

   return (
      <section>
         <Swiper
            loop={true}
            centeredSlides={true}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
         >
            {banners.map((banner, index) => (
               <SwiperSlide key={index}>
                  <div
                     className="relative flex min-h-[85vh] items-center justify-center px-4 sm:px-6 md:justify-start md:px-20 lg:px-28 bg-cover bg-center mb-4"
                     style={{
                        backgroundImage: `url(${banner.image})`,
                     }}
                  >
                     {/* Premium Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

                     <div className="relative z-10 max-w-3xl text-white">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                           <span className="text-sm font-medium tracking-wide">
                              📚 Welcome to BookNest
                           </span>
                        </div>

                        {/* Heading */}
                        <h1 className="animate__animated animate__fadeInUp mb-6 text-5xl font-bold leading-tight md:text-7xl">
                           {banner.title}
                        </h1>

                        {/* Sub Text */}
                        <p className="animate__animated animate__fadeInUp mb-10 max-w-2xl text-lg text-gray-200 md:text-xl">
                           Discover thousands of books, explore unforgettable stories, and build
                           your personal reading journey with BookNest.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                           <Button
                              size="lg"
                              color="secondary"
                              radius="full"
                              endContent={<MoveRight size={18} />}
                              className="font-semibold"
                           >
                              Explore Books
                           </Button>

                           <Button
                              size="lg"
                              variant="outline"
                              radius="full"
                              className="border-white text-white"
                           >
                              Join Community
                           </Button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
}
