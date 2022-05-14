import React from 'react';
import CustomRadioButton from 'src/components/CustomRadioButton';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
type Props = {
  secret: string;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
};
export function SecretSelectInput({ secret, setSecret }: Props) {
  return (
    <Container>
      <TitleWrapper>
        <Typography size="20" fontWeight="bold">
          공개여부
        </Typography>
      </TitleWrapper>
      <CustomRadioButton
        id="noSecret"
        label="공개"
        name="secretSetting"
        selectedValue={secret}
        onChange={e => setSecret(e.target.value)}
        gap={10}
        marginLeft={30}
        marginRight={20}
      />
      <CustomRadioButton
        id="secret"
        label="비공개"
        name="secretSetting"
        selectedValue={secret}
        onChange={e => setSecret(e.target.value)}
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

const TitleWrapper = styled.div`
  display: flex;
  min-width: 100px;
  justify-content: flex-end;
`;
