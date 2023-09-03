'use client';

import { Input, Textarea } from '@nextui-org/react';
import toast from 'react-hot-toast';
import { useMemo, useState } from 'react';
import SubmitBtn from '@/components/submit-btn';
import { sendEmail } from '@/actions/sendEmail';
import Link from 'next/link';

export default function ContactForm() {
  const [value, setValue] = useState<string>('');

  const validateEmail = (value: string) =>
    value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  const validationState = useMemo(() => {
    if (value === '') return undefined;

    return validateEmail(value) ? 'valid' : 'invalid';
  }, [value]);

  return (
    <div className="px-2 md:p-4 py-8 min-w-full md:min-w-[650px] rounded-lg backdrop-blur-md shadow-lg">
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <Input
          type="email"
          label="Email"
          name="email"
          variant="bordered"
          labelPlacement="outside"
          size="lg"
          color={validationState === 'invalid' ? 'danger' : 'default'}
          errorMessage={
            validationState === 'invalid' && 'Please enter a valid email'
          }
          validationState={validationState}
          onValueChange={setValue}
          isRequired
          isClearable
          className="mb-8 w-full rounded-lg"
        />
        <Textarea
          label="Message"
          name="message"
          labelPlacement="outside"
          variant="bordered"
          isRequired
          placeholder="Enter your message"
          className="w-full rounded-lg mb-5"
        />
        <SubmitBtn />
      </form>
    </div>
  );
}
