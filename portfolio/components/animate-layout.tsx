'use client';

import { container } from '@/lib/variants';
import { LayoutGroup, motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export default function AnimateLayout({ children }: Props) {
  return <LayoutGroup>{children}</LayoutGroup>;
}
