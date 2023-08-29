import { Metadata } from 'next';
import Container from '@/components/ui/container';
import { getExperiences } from '@/actions/getExperiences';
import PageContent from './components/page-content';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Here you can find details about my development experience',
};

export default async function ExperiencePage() {
  const experiences = await getExperiences();

  return (
    <Container>
      <PageContent experiences={experiences} />
    </Container>
  );
}
