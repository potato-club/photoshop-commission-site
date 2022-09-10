import React, { useState } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';

// Todo : 타입 받아서 게시글 댓글창인지, 대댓글 댓글창인지 확인해야하고,
// Todo : 아마 보내는 API 도 다를거같음. (게시글 댓글달기, 대댓글 댓글달기 => 얘기 해봐야함)
type Props = {
  type: 'Board' | 'Comment';
};
export function CustomInput({ type }: Props) {
  const [comment, setComment] = useState<string>();

  const clickWrite = () => {
    alert('입력버튼 클릭\n값: ' + comment);
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
        <FaPaperPlane size={24} onClick={() => clickWrite()} />
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
  right: ${({type}) => type === 'Board' ? '24px' : '12px'};
  align-items: ${({ type }) => (type === 'Board' ? 'flex-end' : 'center')};
`;
