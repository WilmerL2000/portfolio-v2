'use client';

import Header from '@/components/ui/header';
import ProjectCard from './project-card';
import { motion } from 'framer-motion';
import { container } from '@/lib/variants';

type Props = {
  projects: HomeProjects[];
};

export default function PageContent({ projects }: Props) {
  return (
    <div className="mt-10 pb-14">
      <Header title="Projects" />
      <section className="mt-10 grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 md:gap-3">
        {projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </section>
    </div>
  );
}
