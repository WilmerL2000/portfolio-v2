'use client';

import TechLogo from '@/components/tech-logo';
import ProjectHeader from '@/components/ui/project-header';
import { container, item } from '@/lib/variants';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { motion } from 'framer-motion';

type Props = {
  project: Project;
};

export default function PageContent({ project }: Props) {
  return (
    <motion.div className="px-5 mt-5 overflow-hidden pb-10 ">
      <ProjectHeader
        projectImage={project.projectImage}
        title={project.title}
        id={project._id}
      />
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.div variants={item} className="grid md:grid-cols-2 gap-2 mt-10">
          <Card className="py-4  " isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
              <h2 className="uppercase font-bold text-lg md:text-4xl">
                Description
              </h2>
            </CardHeader>
            <Divider />
            <CardBody className="py-9 font-normal leading-relaxed text-lg md:text-2xl">
              {project.summary}
            </CardBody>
          </Card>
          <Card className="py-4 mt-6 md:mt-0" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
              <h2 className="uppercase font-bold text-lg md:text-4xl">
                Technologies
              </h2>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row flex-wrap gap-4 justify-center">
              {project.technologies.map((tech) => (
                <TechLogo key={tech._id} tech={tech} />
              ))}
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
