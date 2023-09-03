'use client';

import { motion } from 'framer-motion';
import About from '@/components/about';
import ArrowDownSign from '@/components/arrow-down';
import HeroSection from '@/components/hero/hero-section';
import { container } from '@/lib/variants';

export default function PageContent() {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <div className="md:-translate-y-10">
          <ArrowDownSign />
        </div>
      </div>
      <About />
    </motion.div>
  );
}
