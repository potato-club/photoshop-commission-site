import { Dispatch, SetStateAction } from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';

type InfoItemType = React.PropsWithChildren<{
  header: string;
}>;
export const InfoItem = ({ header, children }: InfoItemType) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Typography size="16" color="gray">
          {header}
        </Typography>
      </HeaderWrapper>
      <ItemWrapper>{children}</ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 15%;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 85%;
`;
