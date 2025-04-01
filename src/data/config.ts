import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Rafael Nuñez - React Developer',
    description:
      'I’m a dedicated React developer with 4 years of experience as a full-stack developer, working in agile teams. While I enjoy both frontend and backend development, I’ve grown more passionate about building great user experiences on the frontend, while keeping my backend skills sharp. I love collaborating with my team, offering help when needed, and creating a positive and enjoyable work environment. Always eager to learn and improve, I stay up to date with the latest technologies to build high-quality, efficient applications.',
    faviconPath: '/src/assets/my-image.webp',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
