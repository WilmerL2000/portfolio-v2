import Header from '@/components/ui/header';
import ContactForm from './contact-form';

export default function PageContent() {
  return (
    <div className="mt-10 pb-14">
      <Header title="Contact" />
      <div className="mt-10 flex justify-center ">
        <ContactForm />
      </div>
    </div>
  );
}
