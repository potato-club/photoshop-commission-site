import Link from 'next/link';
import styled from 'styled-components';
import { Typography } from './Typography';

interface IContent {
  text: string;
  href: string;
}
interface ContentType {
  theme: string;
  content?: IContent[];
  href: string;
}

export const Content = ({ theme, content, href }: ContentType) => {
  return (
    <ul>
      <li>
        <Link href={href} passHref>
          <Page>
            <NewTypography size="20" color="blue" fontWeight="bold">
              {theme}
            </NewTypography>
          </Page>
        </Link>
      </li>

      {content?.map((element, index) => (
        <li key={index}>
          <Link href={`${element.href}`} passHref>
            <a>
              <NewTypography size="12" color="gray">
                {element.text}
              </NewTypography>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Content;

const Page = styled.a`
  display: inline-block;
  margin-bottom: 9px;
  text-decoration: none;
`;

const NewTypography = styled(Typography)`
  padding: 5px 0 5px 0;
  display: inline-block;
  :hover {
    font-weight: 900;
  }
`;
