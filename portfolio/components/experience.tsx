'use client';

import { Divider } from '@nextui-org/react';
import { Briefcase } from 'lucide-react';
import { useTheme } from 'next-themes';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import TechLogo from './tech-logo';

type ExperienceProps = { experience: WorkExperience };

export default function Experience({ experience }: ExperienceProps) {
  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
        padding: '1.3rem 2rem',
      }}
      contentArrowStyle={{
        borderRight:
          theme === 'light'
            ? '0.4rem solid #9ca3af'
            : '0.4rem solid rgba(255, 255, 255, 0.5)',
      }}
      date={`${experience.dateStarted} | ${experience.dateEnded}`}
      icon={<Briefcase />}
      iconStyle={{
        background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
        fontSize: '1.5rem',
      }}
    >
      <h3 className="font-semibold capitalize">{experience.jobTitle}</h3>
      <p className="font-normal !mt-0">{experience.company}</p>
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        {experience.summary}
      </p>

      <Divider className="mt-2 mb-2 py-1 rounded-lg" />

      <span>Techologies</span>

      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {experience.technologies.map((tech) => (
          <TechLogo key={tech._id} tech={tech} />
        ))}
      </div>
    </VerticalTimelineElement>
  );
}
