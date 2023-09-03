import { motion } from 'framer-motion';
import { item } from '@/lib/variants';

export default function HeroTitle() {
  return (
    <motion.section variants={item} className="text-center flex justify-center">
      <div className="flex flex-col gap-6">
        <span className="text-5xl md:text-9xl tracking-[.8rem] md:tracking-[2.5rem] font-semibold">
          Wilmer
        </span>
        <span className="text-lg md:text-5xl font-medium">
          Front End Developer
        </span>
        <span className="text-5xl md:text-9xl tracking-[.8rem] md:tracking-[2.5rem] font-semibold">
          Lopez
        </span>
      </div>
    </motion.section>
  );
}
