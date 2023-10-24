'use client';

import { motion } from 'framer-motion';
import { Github, LayoutDashboard } from 'lucide-react';
import ProjectButton from './project-button';

type ProjectHeaderProps = {
  id: string;
  title: string;
  projectImage: string;
  github: string;
  website: string;
};

export default function ProjectHeader({
  id,
  title,
  projectImage,
  github,
  website,
}: ProjectHeaderProps) {
  return (
    <motion.header
      style={{ backgroundImage: `url(${projectImage})` }}
      layoutId={id}
      className="rounded-3xl md:rounded-lg relative aspect-video min-h-[250px] md:max-h-[750px] w-full overflow-hidden bg-cover"
    >
      <motion.div
        layoutId={title}
        className="flex justify-between items-center absolute bottom-2 md:bottom-1 left-0 right-0 
          m-2 p-1 md:p-4 backdrop-blur-xl bg-black/30 rounded-lg"
      >
        <h1 className="font-bold text-lg sm:text-5xl text-white/70">{title}</h1>
        <div className="flex justify-between gap-4 md:gap-5 items-center ">
          <ProjectButton title="Github" icon={<Github />} url={github} />
          <ProjectButton
            title="Website"
            icon={<LayoutDashboard />}
            url={website}
          />
        </div>
      </motion.div>
    </motion.header>
  );
}
