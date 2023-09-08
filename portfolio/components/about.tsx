import { Tabs, Tab, Divider, Card, CardBody } from '@nextui-org/react';
import { Gamepad, GanttChartSquare, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { item } from '@/lib/variants';

const tabInfo = [
  {
    title: 'General',
    icon: <GanttChartSquare />,
    content:
      'Dedicated, proactive and responsible person. Graduated with honors in Business Computing from the University of Costa Rica. \n I have normally been focused on the frontend, however, I also work on the backend.',
  },
  {
    title: 'Leisure',
    icon: <Gamepad />,
    content:
      "If I'm not coding or watching technology related courses or videos, I do activities like exercising or listening to music or lightly playing some video game.",
  },
  {
    title: 'Music',
    icon: <Music />,
    content:
      'I like a bit of everything, but mostly pop, 80s rock and classical music.',
  },
];

export default function About() {
  return (
    <section className="mt-16 mb-14 px-4">
      <motion.div variants={item}>
        <div
          className="font-semibold dark:text-[#ededed] text-3xl sm:text-5xl lg:text-6xl 
        sm:max-w-xl max-w-xs uppercase tracking-widest"
        >
          About me
        </div>
        <Divider />
      </motion.div>

      <motion.div variants={item}>
        <Tabs
          aria-label="Options"
          color="default"
          variant="bordered"
          className="mt-10"
        >
          {tabInfo.map((tab) => (
            <Tab
              key={tab.title}
              title={
                <div className="flex items-center space-x-2">
                  {tab.icon}
                  <span className=" text-lg md:text-xl">{tab.title}</span>
                </div>
              }
            >
              <Card>
                <CardBody>{tab.content}</CardBody>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}
