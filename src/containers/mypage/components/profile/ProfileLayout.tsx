import { Typography } from 'src/components/Typography';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { IoCreateOutline, IoSaveOutline } from 'react-icons/io5';
import { Dispatch, SetStateAction } from 'react';

type ProfileLayoutType = React.PropsWithChildren<{
  title: string;
  isChangeState: boolean;
  handleClickButton: () => void;
}>;

export const ProfileLayout = ({
  title,
  children,
  isChangeState,
  handleClickButton,
}: ProfileLayoutType) => {
  return (
    <Container>
      <HeaderWrapper>
        <TitleWrapper>
          <Typography size="20" fontWeight="bold">
            {title}
          </Typography>
        </TitleWrapper>
        <ButtonWrapper onClick={() => handleClickButton()}>
          {isChangeState ? <IoSaveOutline /> : <IoCreateOutline />}
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
    color: ${customColor.blue};
  }
`;

const Box = styled.div`
  border: 1px solid ${customColor.gray};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  div {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;
