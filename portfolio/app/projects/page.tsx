import { Metadata } from 'next';
import Container from '@/components/ui/container';
import PageContent from './components/page-content';
import AnimateLayout from '@/components/animate-layout';
import { getProjects } from '@/actions/getProjects';

export const revalidate = 1000;

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'These are some of the projects that I have developed, where you can see more details and access the corresponding links',
};

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
