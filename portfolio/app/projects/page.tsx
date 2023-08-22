import { getProjects } from '@/actions/getProjects';
import Container from '@/components/ui/container';
import PageContent from './components/page-content';

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Container>
      <div className="px-6">
        <PageContent projects={projects} />
      </div>
    </Container>
  );
}
