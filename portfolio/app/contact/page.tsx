import { Metadata } from 'next';
import Container from '@/components/ui/container';
import PageContent from './components/page-content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Here you can find a form to send me a message or some other contact information',
};

export default function ContactPage() {
  return (
    <Container>
      <div className="px-6">
        <PageContent />
      </div>
    </Container>
  );
}
