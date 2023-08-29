'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Experience from '@/components/experience';
import Header from '@/components/ui/header';

type Props = {
  experiences: WorkExperience[];
};

export default function PageContent({ experiences }: Props) {
  return (
    <div className="px-1 md:px-5 mt-3 md:mt-5 overflow-hidden pb-10 flex flex-col gap-4">
      <Header title="Experience" />
      <VerticalTimeline lineColor="">
        {experiences.map((experience) => (
          <Experience key={experience._id} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
}
