import { Typography } from 'src/components/Typography';
import styled from 'styled-components';

type InfoItemType = {
  header: string;
  item: string;
};
export const InfoItem = ({ header, item }: InfoItemType) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Typography size="16" color="gray">
          {header}
        </Typography>
      </HeaderWrapper>
      <ItemWrapper>
        <Typography
          size="16"
          color={header !== '평점' ? 'black' : 'blue'}
          fontWeight="bold"
        >
          {item}
        </Typography>
      </ItemWrapper>
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
