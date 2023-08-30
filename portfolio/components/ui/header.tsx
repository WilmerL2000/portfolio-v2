type HeaderProps = {
  title: string;
  icon?: React.ReactNode;
};

export default function Header({ title, icon }: HeaderProps) {
  return (
    <header
      className="rounded-xl relative aspect-[2.4/1] md:aspect-auto backdrop-blur-lg drop-shadow-xl 
      overflow-hidden bg-black/10 dark:bg-white/60 md:py-10"
    >
      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-semibold dark:text-[#ededed] text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs uppercase tracking-widest">
          {title}
        </div>
      </div>
    </header>
  );
}
