'use client';

import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { ArrowDownWideNarrow, Cpu } from 'lucide-react';
import { useEffect } from 'react';
import ImageList from '@/components/image-list';
import TechLogo from '@/components/tech-logo';
import ProjectHeader from '@/components/ui/project-header';
import ProjectLinkButton from '@/components/ui/project-link-button';
import { container, item } from '@/lib/variants';
import useProject from '@/hooks/use-project';

type Props = {
  project: Project;
  projects: HomeProject[];
};

export default function PageContent({ project, projects }: Props) {
  const projectStore = useProject();

  useEffect(() => {
    projectStore.setActiveProject(project);
    projectStore.setProjects(projects);
  }, [projectStore.activeProject]);

  return (
    <motion.div className="px-1 md:px-5 mt-3 md:mt-5 overflow-hidden pb-6">
      <ProjectHeader
        projectImage={project.projectImage}
        title={project.title}
        id={project._id}
        github={project.repositoryLink}
        website={project.webLink}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="px-5 md:px-0"
      >
        <motion.div variants={item}>
          <div className="grid lg:grid-cols-2 gap-3 mt-6 md:mt-16 pb-10">
            <Card className="py-4 bg-[#a855f7] rounded-lg">
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

            <Card className="py-4 mt-6 md:mt-0 bg-[#6FEC9E] dark:bg-[#4CA76E] rounded-lg">
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
          </div>
        </motion.div>
        <ImageList images={project.projectImages} />

        <Divider className="mt-10 md:mt-16 mb-8 " />

        <div className="flex justify-between">
          <ProjectLinkButton
            project={projectStore.previousProject}
            direction="left"
            url={`/projects/${projectStore.previousProject?.slug}`}
          />
          <ProjectLinkButton
            project={projectStore.nextProject}
            direction="right"
            url={`/projects/${projectStore.nextProject?.slug}`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
