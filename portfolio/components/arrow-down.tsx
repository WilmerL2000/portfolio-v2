import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { item } from '@/lib/variants';

export default function ArrowDownSign() {
  return (
    <motion.div
      variants={item}
      className="animate-bounce w-16 h-16 rounded-full border-2 flex items-center justify-center mt-7 md:mt-12 mb-5"
    >
      <ArrowDown size={48} className="text-[#858585] dark:text-foreground" />
    </motion.div>
  );
}
