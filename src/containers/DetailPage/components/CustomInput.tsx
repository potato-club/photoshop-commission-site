import React, { useState } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import { boardApi } from 'src/apis/board';
import { useRouter } from 'next/router';
import { useGetToken } from 'src/hooks/useGetToken';

type Props = {
  type: 'Board' | 'Comment';
  parentId?: number;
};
export function CustomInput({ type, parentId }: Props) {
  const [comment, setComment] = useState<string>();
  const { query: {id} } = useRouter();
  const { access, refresh } = useGetToken();

  const commentSubmit = async () => {
    if (!comment) {
      alert('내용을 입력해주세요!'); // Todo : alert 창 뭐로 할건지 등등
      return;
    }
    const data = parentId
      ? await boardApi.postReply(
          id,
          { comment, parentId },
          access,
          refresh,
        )
      : await boardApi.postComment(id, { comment }, access, refresh);
      console.log(data);
  };
  return (
    <Container type={type}>
      <Input
        spellCheck={false}
        type={type}
        placeholder="작성할 댓글을 입력해주세요..."
        onChange={e => setComment(e.target.value)}
      />
      <SubMitButton type={type}>
        <FaPaperPlane size={24} onClick={() => commentSubmit()} />
      </SubMitButton>
    </Container>
  );
}

type StyleProps = {
  type: 'Board' | 'Comment';
};
const Container = styled.div<StyleProps>`
  position: relative;
  width: 100%;
  max-width: 1178px;
  padding-left: ${({ type }) => (type === 'Board' ? '12px' : '160px')};
  padding-right: ${({ type }) => (type === 'Board' ? '12px' : 0)};
  margin-bottom: 20px;
`;
const Input = styled.textarea<StyleProps>`
  width: 100%;
  box-sizing: border-box;
  height: ${({ type }) => (type === 'Board' ? '100px' : '40px')};
  padding: 12px 80px 0 16px;
  outline: none;
  border: none;
  border: 1px solid ${customColor.gray};
  border-radius: 10px;
  font-size: 16px;
  ::placeholder {
    color: ${customColor.gray};
  }
  resize: none;
`;

const SubMitButton = styled.div<StyleProps>`
  position: absolute;
  height: 100%;
  display: flex;
  top: ${({ type }) => type === 'Comment' && '0'};
  bottom: ${({ type }) => type === 'Board' && '12px'};
  right: ${({ type }) => (type === 'Board' ? '24px' : '12px')};
  align-items: ${({ type }) => (type === 'Board' ? 'flex-end' : 'center')};
`;
