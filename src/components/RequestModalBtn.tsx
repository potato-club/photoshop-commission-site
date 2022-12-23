import React from 'react';
import { customColor } from 'src/constants/customColor';
import { checkModal, infoModal } from 'src/utils/interactionModal';
import styled from 'styled-components';
import { Typography } from './Typography';
import { useMutation, useQueryClient } from 'react-query';
import { requestApi } from 'src/apis/request';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

export const RequestModalBtn = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: post } = useMutation(
    () => requestApi.acceptRequest(router.query.id),
    {
      onSuccess: () => {
        infoModal('커미션 신청이 완료되었습니다.', 'success');
        queryClient.invalidateQueries('getItem');
      },
      onError: (error: AxiosError) => {
        if (error.response?.status === 409) {
          checkModal(
            '이미 신청된 커미션입니다.',
            () => put(),
            undefined,
            undefined,
            '커미션 신청을 취소하시겠습니까?',
          );
          return;
        }
        alert('커미션 신청 오류');
      },
    },
  );

  const { mutate: put } = useMutation(
    () => requestApi.cancelRequest(router.query.id),
    {
      onSuccess: () => {
        infoModal('커미션 신청이 취소되었습니다.', 'success');
        queryClient.invalidateQueries('getItem');
      },
      onError: () => {
        alert('커미션 취소 오류');
      },
    },
  );

  const acceptCommission = () => {
    checkModal('등록 하시겠습니까?', () => post());
  };
  return (
    <Button onClick={acceptCommission}>
      <Typography color="white" size="16" fontWeight="bold">
        커미션 신청하기
      </Typography>
    </Button>
  );
};

export default RequestModalBtn;

const Button = styled.button`
  border: none;
  padding: 12px 20px;
  background-color: ${customColor.blue};
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
    background-color: ${customColor.lightBlue};
  }
  :active {
    transform: scale(0.99);
  }
  transition: background-color 200ms ease;
`;
