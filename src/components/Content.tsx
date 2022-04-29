import React from 'react';
import Link from 'next/link';
import * as S from './Footer.style';

type ContentType = {
  theme: string;
  content?: string[] | null;
  href: string;
};

export const Content = ({ theme, content, href }: ContentType) => {
  return (
    <S.ContentUl>
      <S.ContentLi>
        <Link href={href} passHref>
          <S.Page>
            <S.NewTypography size="20" color="blue" fontWeight="900">
              {theme}
            </S.NewTypography>
          </S.Page>
        </Link>
      </S.ContentLi>

      {content?.map((element, index) => (
        <S.ContentLi key={index}>
          <Link href={href} passHref>
            <S.A key={index}>
              <S.NewTypography size="12" color="gray">
                {element}
              </S.NewTypography>
            </S.A>
          </Link>
        </S.ContentLi>
      ))}
    </S.ContentUl>
  );
};

export default Content;
