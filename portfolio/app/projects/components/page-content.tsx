import Header from '@/components/ui/header';
import ProjectCard from './project-card';

type Props = {
  projects: HomeProject[];
};

export default function PageContent({ projects }: Props) {
  return (
    <div className="mt-10 pb-14 flex flex-col gap-4">
      <Header title="Projects" />
      <ul className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </ul>
    </div>
  );
}
