import { pathName } from 'src/constants/pathName';
export const FooterList = [
  {
    theme: '인트로페이지',
    href: pathName.INDEX,
  },
  {
    theme: 'HOME',
    content: [
      {
        text: '의뢰전',
        href: `${pathName.MOREVIEW}/before`,
      },
      {
        text: '의뢰중',
        href: `${pathName.MOREVIEW}/doing`,
      },
      {
        text: '의뢰완료',
        href: `${pathName.MOREVIEW}/complete`,
      },
    ],
    href: pathName.MOREVIEW,
  },
  {
    theme: 'ABOUT',
    content: [
      {
        text: '공지사항',
        href: '/',
      },
      {
        text: '이용약관',
        href: '/',
      },
    ],
    href: '/about',
  },
];
