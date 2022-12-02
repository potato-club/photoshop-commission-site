import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { Typography } from 'src/components';
import { useRouter } from 'next/router';
import { boardApi } from 'src/apis/board';
import { useGetToken } from 'src/hooks/useGetToken';
type Props = {
  myPost: boolean;
};
export const BoardMenu = ({ myPost }: Props) => {
  const router = useRouter();
  const { access, refresh } = useGetToken();
  const remove = async () => {
    try {
      const { data } = await boardApi.delete(router.query.id, access, refresh);
      console.log(data);
      router.push('/main');
    } catch (e) {
      console.log(e);
    }
  };

  const update = () => {
    // 수정하기 페이지로 보내기 (쿼리도 같이 보내기)
  };

  return (
    <Container>
      {myPost ? (
        <Wrapper>
          <Content>
            <Typography size="16" fontWeight="bold">
              수정하기
            </Typography>
          </Content>
          <Content onClick={() => remove()}>
            <Typography size="16" fontWeight="bold">
              삭제하기
            </Typography>
          </Content>
        </Wrapper>
      ) : (
        <Wrapper>
          <Content>
            <Typography size="16" fontWeight="bold">
              신고하기
            </Typography>
          </Content>
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: max-content;
  top: 20px;
  right: 0;
  background-color: ${customColor.white};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
  border: 1px solid ${customColor.blue};
  border-bottom: none;
  :last-child {
    border-bottom: 1px solid ${customColor.blue};
  }
  :hover {
    background-color: ${customColor.lightBlue};
    div {
      color: ${customColor.white};
    }
  }
`;
