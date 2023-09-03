import { ArrowDownToLine } from 'lucide-react';

export default function BtnResume() {
  return (
    <a
      className="group bg-[#67d6f4] dark:bg-[#49b0cd] px-7 py-3 flex items-center gap-2 rounded-lg 
      outline-none focus:scale-110 hover:scale-110 active:scale-105 transition 
      cursor-pointer borderBlack mt-8"
      href="/WilmerLopez.docx"
      download
    >
      Download CV{' '}
      <ArrowDownToLine className="opacity-60 group-hover:translate-x-2 transition" />
    </a>
  );
}
