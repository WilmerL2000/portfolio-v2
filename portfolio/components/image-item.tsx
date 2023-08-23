import { Card, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';

type ImageItemProps = { image: ProjectImage };

export default function ImageItem({ image }: ImageItemProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      transition={{
        duration: 1.5,
        type: 'spring',
      }}
      whileInView={{ y: 0, opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <Card
        shadow="sm"
        isPressable
        isBlurred
        className="border-none shadow-lg bg-background/60 dark:bg-default-100/50 rounded-lg"
      >
        <Image
          alt={image._key}
          src={image.url}
          className="object-cover"
          isZoomed
        />
      </Card>
    </motion.div>
  );
}
