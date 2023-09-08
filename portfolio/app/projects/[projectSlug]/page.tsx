import Container from '@/components/ui/container';
import PageContent from './components/page-content';
import { getProject } from '@/actions/getProject';
import { getProjects } from '@/actions/getProjects';

type Props = {
  params: { projectSlug: string };
};

export const revalidate = 5000;

export default async function ProjectPage({ params }: Props) {
  const projects = await getProjects();
  const project = await getProject(params.projectSlug);

  return (
    <Container>
      <PageContent project={project} projects={projects} />
    </Container>
  );
}

export async function generateMetadata({ params }: Props) {
  const project = await getProject(params.projectSlug);

  return {
    title: project.title,
    description: project.summary,
  };
}
