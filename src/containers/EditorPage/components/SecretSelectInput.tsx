import React from 'react';
import CustomRadioButton from 'src/components/CustomRadioButton';
import { Typography } from 'src/components/Typography';
import { imageOpenType } from 'src/types/imageOpen.type';
import styled from 'styled-components';
type Props = {
  imageOpen: imageOpenType;
  setImageOpen: React.Dispatch<React.SetStateAction<imageOpenType>>;
};
export function SecretSelectInput({ imageOpen, setImageOpen }: Props) {
  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        공개여부
      </Typography>
      <CustomRadioButton
        id={imageOpenType.open}
        label="공개"
        name={imageOpenType.open}
        selectedValue={imageOpen}
        onChange={() => setImageOpen(imageOpenType.open)}
        gap={10}
        marginLeft={30}
        marginRight={20}
      />
      <CustomRadioButton
        id={imageOpenType.notOpen}
        label="비공개"
        name={imageOpenType.notOpen}
        selectedValue={imageOpen}
        onChange={() => setImageOpen(imageOpenType.notOpen)}
        gap={10}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
`;
