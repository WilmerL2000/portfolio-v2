import { getProjects } from '@/actions/getProjects';
import Container from '@/components/ui/container';
import PageContent from './components/page-content';
import AnimateLayout from '@/components/animate-layout';

export const revalidate = 86400;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Container>
      <AnimateLayout>
        <div className="px-6">
          <PageContent projects={projects} />
        </div>
      </AnimateLayout>
    </Container>
  );
}
