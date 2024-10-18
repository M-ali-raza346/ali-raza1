"use client";


import { AnimatedTooltip } from "./ui/animated-tooltip";
import aliImage from '@/components/images/img.jpeg';
import razaImage from '@/components/images/asif.jpeg';

import faizanImage from '@/components/images/faizan.jpeg';
import logoImage from '@/components/images/gif.jpeg'
const Instructors = [
  {
    id: 1,
    name: 'M Faizan Akram',
    designation: ' App Development Mentor',
    image: faizanImage, 
  },
  {
    id: 2,
    name: 'M Ali Raza',
    designation: 'web Development Mentor',
    image: aliImage, 
  },
  {
    id: 3,
    name: 'Asif Langrah',
    designation: 'AI Generative Mentor',
    image: razaImage, 
  },
];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${logoImage.src})`,
        backgroundSize: 'contain', // Change to 'contain' to fit the logo
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the image
      }}
    >
      {/* Semi-transparent overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10"> {/* Text above overlay */}
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 drop-shadow">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-center mb-4 text-white drop-shadow">
          Discover the talented professionals who will guide your coding journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={Instructors} />
        </div>
      </div>
    </div>
  );
}

export default Instructor