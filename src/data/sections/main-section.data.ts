import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.webp'),
  fullName: 'Rafael Nuñez',
  role: 'Full-stack Developer',
  details: [
    { label: 'Phone', value: '+598 91 896 869', url: 'tel:+598 91 896 869' },
    { label: 'Email', value: 'rafanu219@gmail.com', url: 'mailto:rafanu219@gmail.com' },
    { label: 'From', value: 'Montevideo, Uruguay' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+598 91 896 869' },
    { label: 'Email', value: 'rafanu219@gmail.com' },
    { label: 'LinkedIn', value: '/in/rafel-nuñez-aliucci', url: 'https://www.linkedin.com/in/rafael-nuñez-aliucci/' },
    { label: 'GitHub', value: '/Rafanu219', url: 'https://github.com/Rafanu219' },
  ],
  description:
    'Full Stack Developer with 5+ years of experience creating scalable web applications. I specialize in the JavaScript ecosystem (React, Node.js, TypeScript), with a passion for crafting intuitive user experiences and clean code. I love collaborating in agile environments and constantly learning new technologies to build better software.',
  tags: [{ name: 'Open for contractor' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Rafael_Nuñez.pdf',
  },
  links: [
    github({ url: 'https://github.com/Rafanu219' }),
    linkedin({ url: 'https://www.linkedin.com/in/rafael-nuñez-aliucci/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
