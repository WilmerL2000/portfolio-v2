'use client';

import { Card, CardFooter, Button, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

type ProjectCardProps = {
  _id: string;
  title: string;
  projectImage: string;
  slug: string;
};

export default function ProjectCard({
  _id,
  title,
  projectImage,
  slug,
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <Card
      isFooterBlurred
      isPressable
      isBlurred
      onPress={() => router.push(`/projects/${slug}`)}
      radius="lg"
      className=" bg-background/60 dark:bg-default-100/50 border-none rounded-xl group card"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover rounded-xl p-5 scale-150 -translate-y-3"
        isZoomed
        src={projectImage}
      />
      <CardFooter className="absolute bg-black/40 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-white/60">{title}</p>
      </CardFooter>
    </Card>
  );
}
