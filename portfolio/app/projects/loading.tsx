'use client';

import Container from '@/components/ui/container';
import { Loader } from '@/components/ui/loader';

export default function Loading() {
  return (
    <Container>
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    </Container>
  );
}
