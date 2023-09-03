'use client';
import { Tabs, Tab, Divider } from '@nextui-org/react';

export default function About() {
  return (
    <section className="mt-16 mb-14">
      <div
        className="font-semibold dark:text-[#ededed] text-3xl sm:text-5xl lg:text-6xl 
          sm:max-w-xl max-w-xs uppercase tracking-widest"
      >
        About
      </div>
      <Divider />
    </section>
  );
}
