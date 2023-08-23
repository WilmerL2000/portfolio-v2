import { getProject } from '@/actions/getProject';
import Container from '@/components/ui/container';
import PageContent from './components/page-content';

type Props = {
  params: { projectSlug: string };
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.projectSlug);
  return (
    <Container>
      <PageContent project={project} />
    </Container>
  );
}
