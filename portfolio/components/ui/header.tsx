import { IconNode } from 'lucide-react';

type HeaderProps = {
  title: string;
  Icon?: React.ElementType;
};

export default function Header({ title, Icon }: HeaderProps) {
  return (
    <header className="rounded-xl relative aspect-[2.4/1] md:aspect-auto backdrop-blur-lg drop-shadow-xl overflow-hidden bg-white/30 md:py-10">
      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {title}
        </div>
      </div>
    </header>
  );
}
