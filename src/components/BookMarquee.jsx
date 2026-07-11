'use client';
import Marquee from 'react-fast-marquee';

const BookMarquee = () => {
   return (
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-2 my-2 ">
         <Marquee gradient={false} speed={50} pauseOnHover>
            <span className="mx-6 font-medium">📚 New Arrivals: "The Silent Library"</span>
            <span className="mx-6 font-medium">📖 New Arrivals: "Whispers of the Forest"</span>
            <span className="mx-6 font-medium">🌟 Special Discount on Memberships – Join Now!</span>
            <span className="mx-6 font-medium">📚 New Arrivals: "Echoes of Eternity"</span>
            <span className="mx-6 font-medium">🎉 Limited Time Offer: 30% Off Premium Plan</span>
         </Marquee>
      </div>
   );
};

export default BookMarquee;
