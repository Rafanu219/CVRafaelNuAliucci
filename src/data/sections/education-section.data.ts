import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Software Engineering',
      institution: 'ORT University of Uruguay',
      image: import('@/assets/logos/ort.webp'),
      dates: [new Date('2018.10'), null],
      description: '',
      links: [website({ url: 'https://www.ort.edu.uy/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
