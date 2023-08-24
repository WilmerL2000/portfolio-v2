import { Card, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';

type ImageItemProps = { image: ProjectImage };

export default function ImageItem({ image }: ImageItemProps) {
  return (
    <motion.li
      initial={{ y: 20, opacity: 0 }}
      transition={{
        duration: 1.5,
        type: 'spring',
      }}
      whileInView={{ y: 0, opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="md:last:odd:col-span-2 md:last:odd:aspect-[2.4/1]"
    >
      <Card
        shadow="sm"
        isPressable
        isBlurred
        className="border-none shadow-lg bg-black/10 dark:bg-white/40 rounded-lg"
      >
        <Image
          alt={image._key}
          src={image.url}
          className="object-cover"
          isZoomed
        />
      </Card>
    </motion.li>
  );
}
