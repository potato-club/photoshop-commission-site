import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { IoCreateOutline } from 'react-icons/io5';

type ProfileLayoutType = React.PropsWithChildren<{ title: string }>;

export const ProfileLayout = ({ title, children }: ProfileLayoutType) => {
  return (
    <Container>
      <HeaderWrapper>
        <TitleWrapper>
          <Typography size="20" fontWeight="bold">
            {title}
          </Typography>
        </TitleWrapper>
        <ButtonWrapper onClick={() => {}}>
          <IoCreateOutline />
        </ButtonWrapper>
      </HeaderWrapper>
      <Box>{children}</Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 2px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  padding: 3px;
  &:hover {
    border: 1px solid ${customColor.gray};
  }
`;

const Box = styled.div`
  border: 1px solid ${customColor.gray};
  border-radius: 10px;
  padding: 30px 50px;
  div {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;
