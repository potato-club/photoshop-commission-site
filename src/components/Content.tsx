import React from 'react';
import Link from 'next/link';
import * as S from './Footer.style';
import { NextPage } from 'next';

type ContentType = {
  theme: string;
  content?: string[] | null;
  href: string;
};

const Content: NextPage<ContentType> = ({ theme, content, href }) => {
  return (
    <S.ContentUl>
      <li>
        <Link href={href} passHref>
          <S.Page>
            <S.NewTypography size="20" color="blue" fontWeight="900">
              {theme}
            </S.NewTypography>
          </S.Page>
        </Link>
      </li>

      {content?.map((element, index) => {
        <S.ContentLi>
          <Link href={href} passHref>
            <S.A key={index}>
              <S.NewTypography size="12" color="gray">
                {element}
              </S.NewTypography>
            </S.A>
          </Link>
        </S.ContentLi>;
      })}
    </S.ContentUl>
  );
};

export default Content;
