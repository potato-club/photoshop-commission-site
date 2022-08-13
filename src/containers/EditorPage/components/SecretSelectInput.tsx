import React from 'react';
import CustomRadioButton from 'src/components/CustomRadioButton';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
type Props = {
  secret: boolean;
  setSecret: React.Dispatch<React.SetStateAction<boolean>>;
};
export function SecretSelectInput({ secret, setSecret }: Props) {
  const selectedValue = secret ? 'secret' : 'noSecret';
  return (
    <Container>
      <Typography size="20" fontWeight="bold">
        공개여부
      </Typography>
      <CustomRadioButton
        id="noSecret"
        label="공개"
        name="secretSetting"
        selectedValue={selectedValue}
        onChange={() => setSecret(false)}
        gap={10}
        marginLeft={30}
        marginRight={20}
      />
      <CustomRadioButton
        id="secret"
        label="비공개"
        name="secretSetting"
        selectedValue={selectedValue}
        onChange={() => setSecret(true)}
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

