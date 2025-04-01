import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  astro,
  chakraUi,
  cypress,
  eslint,
  firebase,
  prettier,
  react,
  sass,
  nextJs,
  tailwindCss,
  typescript,
  postgreSql,
  vue,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({
          level: 4,
        }),
        typescript({
          level: 4,
        }),
        sass({
          level: 4,
        }),
        chakraUi({ level: 4 }),
        tailwindCss({ level: 3 }),
        prettier({ level: 5 }),
        eslint({
          level: 4,
        }),
        postgreSql({
          level: 3,
        }),
        nextJs({
          level: 3,
        }),
        firebase({ level: 1 }),
        cypress({ level: 1 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [vue(), astro(), firebase()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
