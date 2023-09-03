'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BannerImage() {
  return (
    <div className="w-72 h-72 md:w-96 md:h-96 mt-24 relative">
      <motion.div
        drag
        dragConstraints={{
          top: -30,
          left: -30,
          right: 30,
          bottom: 30,
        }}
        className="bg-[#a855f7] rounded-full w-14 h-14 md:w-20 md:h-20 absolute"
      />

      <motion.div
        drag
        dragConstraints={{
          top: -30,
          left: -30,
          right: 30,
          bottom: 30,
        }}
        className="bg-[#6FEC9E] dark:bg-[#4CA76E] rounded-full w-36 h-36 md:w-56 md:h-56 absolute right-0 translate-x-10"
      />

      <motion.div
        drag
        dragConstraints={{
          top: -30,
          left: -30,
          right: 30,
          bottom: 30,
        }}
        className="bg-[#EC726A] dark:bg-[#CB625B] rounded-full w-20 h-20 md:w-40 md:h-40 absolute bottom-6 left-0 -translate-x-3 md:-translate-x-5"
      />

      <motion.div
        drag
        dragConstraints={{
          top: -30,
          left: -30,
          right: 30,
          bottom: 30,
        }}
        className="bg-[#4677FF] rounded-full w-8 h-8 md:w-14 md:h-14 absolute bottom-2 right-2"
      />

      <Image
        src="/img/me.png"
        alt="My picture"
        width={500}
        height={500}
        className="rounded-full z-20 absolute md:w-96 md:h-auto"
      />
    </div>
  );
}
