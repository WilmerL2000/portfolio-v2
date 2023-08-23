'use client';

import { item } from '@/lib/variants';
import { Card, CardFooter, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
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
    <motion.div layoutId={_id} className="card">
      <Card
        isFooterBlurred
        isPressable
        onPress={() => router.push(`/projects/${slug}`)}
        radius="lg"
        className="border-solid border-2 rounded-lg h-full"
      >
        <Image
          alt={title}
          className="object-cover scale-150 -translate-y-3"
          isZoomed
          src={projectImage}
        />
        <motion.div layoutId={title}>
          <CardFooter className="absolute bg-black/40 border-1 overflow-hidden py-2 before:rounded-xl rounded-lg bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <footer className="text-white/60">{title}</footer>
          </CardFooter>
        </motion.div>
      </Card>
    </motion.div>
  );
}
