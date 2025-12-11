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

Developing high-performance user interfaces with a focus on great UI/UX is my core strength. Whether building new features or refactoring legacy systems, I strive to make code cleaner, more efficient, and easier to maintain.

Fostering a collaborative environment is essential to my process. I actively support the team through code reviews and mentoring, always looking for opportunities to learn new patterns and technologies to solve problems more effectively.

<br />

**Key Contributions:**
- Led the frontend development of new applications from scratch, taking ownership of architecture and best practices.
- Optimized application performance to ensure fast load times and smooth interactions.
- Modernized legacy codebases, significantly improving maintainability.
- Collaborated in agile teams to deliver high-quality software.
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
