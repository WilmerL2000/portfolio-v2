'use client';

import { Button } from '@nextui-org/react';
import { Tooltip } from '@nextui-org/react';
import { Divider } from '@nextui-org/react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import {
  Briefcase,
  Github,
  Home,
  Lightbulb,
  Linkedin,
  Mail,
} from 'lucide-react';
import ThemeToggle from './ui/theme-toggle';
import { motion } from 'framer-motion';
import { menuItem } from '@/lib/variants';

export default function MenuBar() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
      Icon: <Home />,
    },
    {
      href: '/projects',
      label: 'Projects',
      active:
        pathname === '/projects' ||
        pathname === `/projects/${params.projectSlug}`,
      Icon: <Lightbulb />,
    },
    {
      href: '/experience',
      label: 'Experience',
      active: pathname === '/experience',
      Icon: <Briefcase />,
    },
    {
      href: '/contact',
      label: 'Contact',
      active: pathname === '/contact',
      Icon: <Mail />,
    },
  ];

  const socials = [
    {
      href: 'https://www.linkedin.com/in/wilmer-lopez-cespedes/',
      label: 'LinkedIn',
      Icon: <Linkedin />,
    },
    {
      href: 'https://github.com/WilmerL2000',
      label: 'Github',
      Icon: <Github />,
    },
  ];

  return (
    <div
      className="fixed bottom-4 md:bottom-6 mx-auto inset-x-0 flex justify-center z-20 
      rounded-full shadow-lg max-w-max bg-white/90 backdrop-blur-md dark:bg-[#161616]/70 
      border border-solid dark:border-gray-800"
    >
      <div className="flex justify-between gap-3 p-2 items-center">
        {routes.map((route) => (
          <Tooltip
            key={route.href}
            showArrow
            content={route.label}
            className="text-[#858585]"
          >
            <motion.div
              variants={menuItem}
              whileHover={'initial'}
              whileTap={'animate'}
              className="flex flex-col items-center gap-1"
            >
              <Button
                onPress={() => router.push(route.href)}
                className="rounded-full text-[#858585] dark:text-[#7e7e7e] bg-[#f3f3f3] dark:bg-[#232323]"
                isIconOnly
              >
                {route.Icon}
              </Button>
              {route.active && (
                <span className="rounded-full w-1 h-1 bg-[#858585] dark:bg-[#7e7e7e]" />
              )}
            </motion.div>
          </Tooltip>
        ))}
        <Divider orientation="vertical" />
        {socials.map((social) => (
          <Tooltip
            key={social.href}
            showArrow
            content={social.label}
            className="text-[#858585]"
          >
            <motion.div
              variants={menuItem}
              whileHover={'initial'}
              whileTap={'animate'}
            >
              <Button
                onPress={() => router.push(social.href)}
                className="rounded-full text-[#858585] dark:text-[#7e7e7e] bg-[#f3f3f3] dark:bg-[#232323]"
                isIconOnly
              >
                <span className="">{social.Icon}</span>
              </Button>
            </motion.div>
          </Tooltip>
        ))}
        <Divider orientation="vertical" />
        <ThemeToggle />
      </div>
    </div>
  );
}
