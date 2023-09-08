import { ArrowDownToLine } from 'lucide-react';
import { motion } from 'framer-motion';
import { item } from '@/lib/variants';

export default function BtnResume() {
  return (
    <motion.a
      variants={item}
      whileHover={{ scale: 1.2 }}
      className="group bg-[#67d6f4] dark:bg-[#49b0cd] px-7 py-3 flex items-center gap-2 rounded-lg 
      outline-none transition cursor-pointer mt-8 z-20 mb-7"
      href="/WilmerLopez.docx"
      download
    >
      Download CV
      <ArrowDownToLine className="opacity-60 group-hover:translate-x-2 transition" />
    </motion.a>
  );
}
