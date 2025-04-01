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
  role: 'React Developer',
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
    'I’m a dedicated React developer with 4 years of experience as a full-stack developer, working in agile teams. While I enjoy both frontend and backend development, I’ve grown more passionate about building great user experiences on the frontend, while keeping my backend skills sharp. I love collaborating with my team, offering help when needed, and creating a positive and enjoyable work environment. Always eager to learn and improve, I stay up to date with the latest technologies to build high-quality, efficient applications.',
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
