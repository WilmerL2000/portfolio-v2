'use client';

import TechLogo from '@/components/tech-logo';
import ProjectHeader from '@/components/ui/project-header';
import { container, item } from '@/lib/variants';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { ArrowDownWideNarrow, Cpu } from 'lucide-react';

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
        <motion.div variants={item} className="grid md:grid-cols-2 gap-4 mt-10">
          <Card className="py-4 bg-[#a855f7]" isPressable>
            <CardHeader className="pt-2 flex items-center justify-between mb-4 px-8">
              <h2 className="uppercase font-bold text-lg md:text-4xl">
                Description
              </h2>
              <ArrowDownWideNarrow className="w-9 h-9 md:w-14 md:h-14" />
            </CardHeader>
            <Divider />
            <CardBody className="py-9 font-normal text-lg md:text-2xl">
              <p className="leading-7 md:leading-8">{project.summary}</p>
            </CardBody>
          </Card>

          <Card
            className="py-4 mt-6 md:mt-0 bg-[#6FEC9E] dark:bg-[#4CA76E]"
            isPressable
          >
            <CardHeader className="pt-2 flex items-center justify-between mb-3 px-8">
              <h2 className="uppercase font-bold text-lg md:text-4xl">
                Technologies
              </h2>
              <Cpu className="w-9 h-9 md:w-14 md:h-14" />
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
