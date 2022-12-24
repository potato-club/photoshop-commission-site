import React from 'react'
import styled from "styled-components";
import { ErrorMessage } from "@hookform/error-message";
import { Typography } from './Typography';
import { FieldErrorsImpl } from 'react-hook-form';
type Props = {
  errors: Partial<FieldErrorsImpl>;
  name: string;
  marginTop?: string;
  marginBottom?: string;
  leftPosition?: string;
  rightPosition?: string;
  bottomPosition?: string;
};
export const CustomErrorMessage = ({ errors, name, marginTop, rightPosition, marginBottom, leftPosition,bottomPosition}: Props) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <ErrorWrapper
          marginTop={marginTop}
          marginBottom={marginBottom}
          leftPosition={leftPosition}
          rightPosition={rightPosition}
          bottomPosition={bottomPosition}
        >
          <Typography size="16" color="danger">
            {message}
          </Typography>
        </ErrorWrapper>
      )}
    />
  );
};
type StyledProps = {
  marginTop?: string;
  marginBottom?: string;
  leftPosition?: string;
  rightPosition?: string;
  bottomPosition?: string;
};
const ErrorWrapper = styled.div<StyledProps>`
  position: absolute;
  top: ${({bottomPosition}) => bottomPosition ? '' : '35px'};
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px` : '')};
  ${({ marginBottom }) => (marginBottom ? `margin-top: ${marginBottom}px` : '')};
  ${({ leftPosition }) => (leftPosition ? `left: ${leftPosition}px` : '')};
  ${({ rightPosition }) => (rightPosition ? `right: ${rightPosition}px` : '')};
  ${({ bottomPosition }) => (bottomPosition ? `bottom: ${bottomPosition}px;` : '')};
  width: max-content;
`;

