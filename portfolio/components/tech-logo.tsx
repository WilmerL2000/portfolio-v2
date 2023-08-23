import { Image, Tooltip } from '@nextui-org/react';

type Props = {
  tech: Technology;
};

export default function TechLogo({ tech }: Props) {
  return (
    <div className="rounded-full p-4 md:p-6">
      <Tooltip
        showArrow
        content={tech.title}
        classNames={{
          base: 'py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400',
          arrow: 'bg-neutral-400 dark:bg-white',
        }}
      >
        <Image
          src={tech.url}
          alt={tech.title}
          className="object-cover max-h-[50px] max-w-[50px] md:max-h-[80px] md:max-w-[80px]"
        />
      </Tooltip>
    </div>
  );
}
