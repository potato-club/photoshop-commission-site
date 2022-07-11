import { customColorType, customColor } from 'src/constants/customColor';
import styled from 'styled-components';

export type TypographyProps = React.PropsWithChildren<{
  size:
    | '48'
    | '44'
    | '40'
    | '36'
    | '32'
    | '28'
    | '24'
    | '20'
    | '16'
    | '12'
    | '8'
    | '4';
  color?: keyof customColorType;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  fontHeight?: string;
  fontHidden?: boolean;
}>;
export const Typography = (props: TypographyProps) => {
  return <TypographyText {...props}>{props.children}</TypographyText>;
};

export const handleColor = (color: keyof customColorType) => {
  for (const keyStore of Object.keys(customColor)) {
    if (keyStore === color) return customColor[keyStore];
  }
};

const TypographyText = styled.div<TypographyProps>`
  font-size: ${({ size }) => size + 'px'};
  color: ${({ color }) => (color ? handleColor(color) : customColor.black)};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
  ${({ fontHeight }) =>
    fontHeight === 'normal' ? '' : `line-height: ${fontHeight};`}

  ${({ fontHidden }) =>
    fontHidden ? 'overflow: hidden;text-overflow: ellipsis;' : ''}
`;
