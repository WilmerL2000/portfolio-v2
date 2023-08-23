'use client';

import { item } from '@/lib/variants';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

type ProjectHeaderProps = {
  projectImage: string;
  title: string;
  id: string;
};

export default function ProjectHeader({
  projectImage,
  title,
  id,
}: ProjectHeaderProps) {
  return (
    <motion.div
      style={{ backgroundImage: `url(${projectImage})` }}
      layoutId={id}
      className="rounded-lg relative aspect-video min-h-min md:max-h-[700px] w-full overflow-hidden bg-cover"
    >
      <motion.div
        layoutId={title}
        className="flex justify-between items-center absolute bottom-2 md:bottom-1 left-0 right-0 m-2 p-1 md:p-4 backdrop-blur-xl bg-black/40 rounded-lg "
      >
        <h1 className="font-bold text-xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {title}
        </h1>
        <div className="flex justify-between gap-3 items-center">
          <Button color="success" variant="ghost">
            Ghost
          </Button>
          <div>Btn 2</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
