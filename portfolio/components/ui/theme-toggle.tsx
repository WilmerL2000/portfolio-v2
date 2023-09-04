'use client';

import { menuItem } from '@/lib/variants';
import { Button, Tooltip } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { Moon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === 'light' ? (
        <Tooltip showArrow className="text-[#858585]" content="Toggle theme">
          <motion.div
            variants={menuItem}
            whileHover={'initial'}
            className="rounded-full"
          >
            <Button
              className="rounded-full text-[#858585] dark:text-[#7e7e7e] bg-[#f3f3f3] dark:bg-[#232323]"
              name="toggle-dark"
              onPress={() => setTheme('dark')}
              isIconOnly
            >
              <SunMoon />
            </Button>
          </motion.div>
        </Tooltip>
      ) : (
        <Tooltip showArrow className="text-[#858585]" content="Toggle theme">
          <motion.div
            variants={menuItem}
            whileHover={'initial'}
            className="rounded-full"
          >
            <Button
              className="rounded-full text-[#858585] dark:text-[#7e7e7e] bg-[#f3f3f3] dark:bg-[#232323]"
              name="toggle-light"
              onPress={() => setTheme('light')}
              isIconOnly
            >
              <Moon />
            </Button>
          </motion.div>
        </Tooltip>
      )}
    </>
  );
}
