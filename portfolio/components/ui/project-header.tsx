'use client';

import { item } from '@/lib/variants';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import ProjectButton from './project-button';
import { Github, LayoutDashboard } from 'lucide-react';

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
      className="rounded-lg relative aspect-video min-h-[250px] md:max-h-[750px] w-full overflow-hidden bg-cover"
    >
      <motion.div
        layoutId={title}
        className="flex justify-between items-center absolute bottom-2 md:bottom-1 left-0 right-0 
          m-2 p-1 md:p-4 backdrop-blur-xl bg-white/10 dark:bg-black/30 rounded-lg "
      >
        <h1 className="font-bold text-lg sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {title}
        </h1>
        <div className="md:flex justify-between gap-5 items-center hidden">
          <ProjectButton title="Github" icon={<Github />} />
          <ProjectButton title="Website" icon={<LayoutDashboard />} />
        </div>
        <div className="md:hidden flex justify-between gap-4 items-center">
          <ProjectButton icon={<Github />} />
          <ProjectButton icon={<LayoutDashboard />} />
        </div>
      </motion.div>
    </motion.div>
  );
}
