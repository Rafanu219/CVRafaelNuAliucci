import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import { chakraUi, firebase, nextJs, react, sass, tailwindCss, typescript } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Full-stack developer',
      company: 'Qubika',
      image: import('@/assets/logos/qubika.webp'),
      dates: [new Date('2020-10'), null],
      description: `
In my current role, I develop websites and web applications for clients, ensuring they are responsive, high-performing, and meet project requirements using an agile approach. I have worked on both new projects and existing ones, redesigning styles, improving performance, and fixing bugs to enhance overall quality.

Over the years, I have consistently worked with React, adapting to different projects by using various libraries and backend technologies. 
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nextJs(), typescript(), chakraUi(), tailwindCss(), sass(), firebase()],
      },
      links: [website({ url: 'https://qubika.com/' }), linkedin({ url: 'https://www.linkedin.com/company/qubika/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
