'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

type Props = {
  title?: string;
  url: string;
  icon: React.ReactNode;
};

export default function ProjectButton({ title, url, icon }: Props) {
  const router = useRouter();

  return (
    <Button
      onPress={() => router.push(url)}
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-1 md:px-12 
        shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full 
        after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 
            hover:after:scale-150 hover:after:opacity-0 p-0 md:py-7"
      endContent={icon}
    >
      <span className="hidden md:block">{title}</span>
    </Button>
  );
}
