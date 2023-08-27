import { Wallpaper } from 'lucide-react';
import ImageItem from './image-item';
import { motion } from 'framer-motion';

type ImagesListProps = { images: ProjectImage[] };

export default function ImageList({ images }: ImagesListProps) {
  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{
          duration: 1.5,
          type: 'spring',
        }}
        whileInView={{ y: 0, opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full bg-[#EC726A] dark:bg-[#CB625B] py-8 rounded-lg uppercase font-bold text-lg md:text-4xl"
      >
        <div className="flex items-center justify-between px-8">
          <span>Screenshots</span>
          <Wallpaper className="w-9 h-9 md:w-14 md:h-14" />
        </div>
      </motion.div>
      <ul className="grid md:grid-cols-2 gap-4">
        {images.map((image) => (
          <ImageItem key={image._key} image={image} />
        ))}
      </ul>
    </>
  );
}
