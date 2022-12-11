import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { Typography } from 'src/components';
import { useRouter } from 'next/router';
import { boardApi } from 'src/apis/board';
import { useGetToken } from 'src/hooks/useGetToken';
import { checkModal, infoModal } from 'src/utils/interactionModal';
import { useMutation } from 'react-query';
type Props = {
  myPost: boolean;
};
export const MenuItem = ({ myPost }: Props) => {
  const router = useRouter();
  const { access, refresh } = useGetToken();

  const { mutate } = useMutation(() => boardApi.delete(router.query.id, access, refresh), {
    onSuccess: () => {
      infoModal('삭제가 완료 되었습니다.' , 'success'); // 확인버튼 누르고 메인페이지 보낼거면 await
      router.push('/main');
    },
    onError: () => {
      alert('글 삭제 오류');
    }
  });
  const removeCheck = () => {
    checkModal('삭제 하시겠습니까?', () => mutate());
  };

  const update = () => {
    // 수정하기 페이지로 보내기 (쿼리도 같이 보내기)
  };

  return (
    <Container>
      {myPost ? (
        <Wrapper>
          <Content onClick={() => router.push(`/modify/${router.query.id}`)}>
            <Typography size="16" fontWeight="bold">
              수정하기
            </Typography>
          </Content>
          <Content onClick={() => removeCheck()}>
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
  z-index: 9;
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
