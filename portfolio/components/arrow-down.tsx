import { ArrowDown } from 'lucide-react';

export default function ArrowDownSign() {
  return (
    <div className="animate-bounce w-16 h-16 rounded-full border-2 flex items-center justify-center mt-6 md:mt-10 mb-5">
      <ArrowDown size={48} className="text-[#858585] dark:text-foreground" />
    </div>
  );
}
