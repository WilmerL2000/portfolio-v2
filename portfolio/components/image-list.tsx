import { Wallpaper } from 'lucide-react';
import ImageItem from './image-item';
import { motion } from 'framer-motion';
import { item } from '@/lib/variants';

type ImagesListProps = { images: ProjectImage[] };

export default function ImageList({ images }: ImagesListProps) {
  return (
    <>
      <motion.div
        variants={item}
        className="w-full bg-[#EC726A] dark:bg-[#CB625B] py-8 rounded-lg uppercase font-bold text-lg md:text-4xl"
      >
        <div className="flex items-center justify-between px-8">
          <span>Screenshots</span>
          <Wallpaper className="w-9 h-9 md:w-14 md:h-14" />
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-5 mt-8">
        {images.map((image) => (
          <ImageItem key={image._key} image={image} />
        ))}
      </div>
    </>
  );
}
