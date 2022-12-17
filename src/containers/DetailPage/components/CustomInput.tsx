import React, { useState } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import { boardApi } from 'src/apis/board';
import { useRouter } from 'next/router';
import { useGetToken } from 'src/hooks/useGetToken';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { infoModal } from 'src/utils/interactionModal';

type Props = {
  type: 'Board' | 'Comment';
  parentId?: number;
};
export function CustomInput({ type, parentId }: Props) {
  const queryClient = useQueryClient();
  const {
    query: { id },
  } = useRouter();
  const { access, refresh } = useGetToken();

  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation(
    (comment: FieldValues) =>
      parentId
        ? boardApi.postReply(id, { comment, parentId }, access, refresh)
        : boardApi.postComment(id, { comment }, access, refresh),
    {
      onSuccess: () => {
        infoModal('댓글 등록이 완료되었습니다.', 'success');
        queryClient.invalidateQueries('getItem');
      },
      onError: () => {},
    },
  );

  const commentSubmit = async (data: FieldValues) => {
    mutate(data.comment);
  };

  return (
    <Container option={type} onSubmit={handleSubmit(commentSubmit)}>
      <Input
        spellCheck={false}
        option={type}
        placeholder="작성할 댓글을 입력해주세요..."
        {...register('comment', { required: true })}
      />
      <SubMitButton option={type} type="submit">
        <FaPaperPlane size={24} />
      </SubMitButton>
    </Container>
  );
}

type StyleProps = {
  option: 'Board' | 'Comment';
};
const Container = styled.form<StyleProps>`
  position: relative;
  width: 100%;
  max-width: 1178px;
  padding-left: ${({ option }) => (option === 'Board' ? '12px' : '160px')};
  padding-right: ${({ option }) => (option === 'Board' ? '12px' : 0)};
  margin-bottom: 20px;
`;
const Input = styled.textarea<StyleProps>`
  width: 100%;
  box-sizing: border-box;
  height: ${({ option }) => (option === 'Board' ? '100px' : '40px')};
  padding: 12px 80px 0 16px;
  outline: none;
  border: none;
  border: 1px solid ${customColor.gray};
  border-radius: 10px;
  font-size: 16px;
  ::placeholder {
    color: ${customColor.gray};
  }
`;

const SubMitButton = styled.button<StyleProps>`
  position: absolute;
  height: auto;
  background-color: transparent;
  display: flex;
  bottom: ${({ option }) => (option === 'Board' ? '12px' : '8px')};
  right: ${({ option }) => (option === 'Board' ? '24px' : '12px')};
  align-items: ${({ option }) => (option === 'Board' ? 'flex-end' : 'center')};
`;
