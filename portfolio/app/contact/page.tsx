import { Metadata } from 'next';
import Container from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Here you can find a form to send me a message or some other contact information',
};

export default function ContactPage() {
  return <Container>ContactPage</Container>;
}
