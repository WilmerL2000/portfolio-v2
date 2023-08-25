'use client';

import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

type ProjectLinkButtonProps = {
  project?: HomeProject;
  url: string;
  direction: 'left' | 'right';
};
export default function ProjectLinkButton({
  project,
  url,
  direction,
}: ProjectLinkButtonProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(url)}
      className="rounded-lg p-2 w-max flex cursor-pointer flex-col"
    >
      <span
        className={cn('text-[#A1A1AA] text-sm md:text-lg', {
          'flex justify-end': direction === 'right',
        })}
      >
        {direction === 'left' ? 'Previous' : 'Next'}
      </span>
      <span className="text-sm md:text-lg">{project?.title}</span>
    </div>
  );
}
