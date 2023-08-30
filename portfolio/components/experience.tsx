'use client';

import { Accordion, AccordionItem, Divider } from '@nextui-org/react';
import { ArrowDownWideNarrow, Briefcase, Cpu, ListChecks } from 'lucide-react';
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
        padding: '1rem .5rem',
        borderRadius: '1rem',
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
        background: theme === 'light' ? '#f3f3f3' : '#232323',
        color: theme === 'light' ? '#858585' : '#7e7e7e',
        fontSize: '1.5rem',
      }}
    >
      <Accordion variant="splitted">
        <AccordionItem
          key={experience._id}
          aria-label={experience.jobTitle}
          title={
            <h1 className="text-base md:text-xl font-medium">
              {experience.jobTitle}
            </h1>
          }
          subtitle={
            <span className="text-[#858585] dark:text-[#7e7e7e]">
              {experience.company}
            </span>
          }
        >
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between">
                <h3 className="text-base md:text-xl font-medium">
                  Description
                </h3>
                <ArrowDownWideNarrow />
              </div>
              <Divider className="mb-2 rounded-lg" />

              <span>{experience.summary}</span>
            </div>

            <div>
              <div className="flex justify-between">
                <h3 className="text-base md:text-xl font-medium">
                  Responsibilities
                </h3>
                <ListChecks />
              </div>
              <Divider className="mb-2 rounded-lg" />

              <ul className="flex flex-row flex-wrap gap-4 justify-center">
                {experience.workPoints.map((workPoint) => (
                  <li key={workPoint._key}>{workPoint.point}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex justify-between">
                <h3 className="text-base md:text-xl font-medium">Tech Stack</h3>
                <Cpu />
              </div>
              <Divider className="mb-2 rounded-lg" />

              <div className="flex flex-row flex-wrap gap-4 justify-center">
                {experience.technologies.map((tech) => (
                  <TechLogo key={tech._id} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </VerticalTimelineElement>
  );
}
