'use client';
import { Card, Button } from '@heroui/react';
import { Check } from 'lucide-react';

const plans = [
   {
      id: 1,
      name: 'Basic',
      price: '$5',
      features: ['Access to 10 books/month', 'Community forum'],
      featured: false,
   },
   {
      id: 2,
      name: 'Premium',
      price: '$12',
      features: ['Unlimited books', 'Exclusive discounts', 'Priority support'],
      featured: true,
   },
   {
      id: 3,
      name: 'Student',
      price: '$7',
      features: ['Unlimited books', 'Special student offers'],
      featured: false,
   },
];

const MembershipPlans = () => {
   return (
      <section className="w-11/12 max-w-6xl mx-auto my-20">
         <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1B2340]">Membership Plans</h2>
            <p className="mt-2 text-sm text-gray-500">
               Simple pricing, no hidden fees. Cancel anytime.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
               <Card
                  key={plan.id}
                  className={`p-8 rounded-2xl flex flex-col text-left transition-shadow duration-200 ${
                     plan.featured
                        ? 'bg-[#1B2340] shadow-xl'
                        : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                  }`}
               >
                  {plan.featured && (
                     <span className="self-start mb-4 text-[11px] font-semibold tracking-wide uppercase text-[#1B2340] bg-white px-3 py-1 rounded-full">
                        Most popular
                     </span>
                  )}

                  <h3
                     className={`text-lg font-semibold mb-1 ${
                        plan.featured ? 'text-white' : 'text-[#1B2340]'
                     }`}
                  >
                     {plan.name}
                  </h3>

                  <p className="mb-6">
                     <span
                        className={`text-3xl font-bold ${
                           plan.featured ? 'text-white' : 'text-[#1B2340]'
                        }`}
                     >
                        {plan.price}
                     </span>
                     <span className={plan.featured ? 'text-gray-300' : 'text-gray-500'}>
                        {' '}
                        /month
                     </span>
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                     {plan.features.map((feature, idx) => (
                        <li
                           key={idx}
                           className={`flex items-start gap-2 text-sm ${
                              plan.featured ? 'text-gray-200' : 'text-gray-600'
                           }`}
                        >
                           <Check
                              size={16}
                              strokeWidth={2.5}
                              className={`mt-0.5 shrink-0 ${
                                 plan.featured ? 'text-white' : 'text-[#1B2340]'
                              }`}
                           />
                           {feature}
                        </li>
                     ))}
                  </ul>

                  <Button
                     className={`w-full rounded-full font-semibold transition-colors duration-200 ${
                        plan.featured
                           ? 'bg-white text-[#1B2340] hover:bg-gray-100'
                           : 'bg-[#1B2340] text-white hover:bg-[#141a30]'
                     }`}
                  >
                     Subscribe
                  </Button>
               </Card>
            ))}
         </div>
      </section>
   );
};

export default MembershipPlans;
