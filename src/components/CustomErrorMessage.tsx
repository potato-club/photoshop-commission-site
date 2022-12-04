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
  bottomPosition?: string;
};
export const CustomErrorMessage = ({ errors, name, marginTop, marginBottom, leftPosition,bottomPosition}: Props) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <ErrorWrapper
          marginTop={marginTop}
          marginBottom={marginBottom}
          leftPosition={leftPosition}
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
  bottomPosition?: string;
};
const ErrorWrapper = styled.div<StyledProps>`
  position: absolute;
  top: ${({bottomPosition}) => bottomPosition ? '' : '35px'};
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px` : '')};
  ${({ marginBottom }) => (marginBottom ? `margin-top: ${marginBottom}px` : '')};
  ${({ leftPosition }) => (leftPosition ? `left: ${leftPosition}px` : '')};
  ${({ bottomPosition }) => (bottomPosition ? `bottom: ${bottomPosition}px;` : '')};
  
`;

