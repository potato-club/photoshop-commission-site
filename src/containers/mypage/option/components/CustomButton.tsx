import { handleColor, Typography } from 'src/components/Typography';
import { customColor, customColorType } from 'src/constants/customColor';
import styled from 'styled-components';

type Props = React.PropsWithChildren<{
  handleClick: () => void;
  style?: {
    backgroundColor?: keyof customColorType;
    color?: keyof customColorType;
    borderColor?: keyof customColorType;
  };
}>;
export const CustomButton = ({ children, handleClick, style }: Props) => {
  return (
    <ButtonWrapper onClick={handleClick} props={style}>
      <Typography
        size={'14'}
        color={style?.color ? style.color : 'gray'}
        fontWeight="bold"
      >
        {children}
      </Typography>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ props: Props['style'] }>`
  width: 100px;
  height: 40px;
  background-color: ${({ props }) =>
    props?.backgroundColor
      ? handleColor(props?.backgroundColor)
      : customColor.white};
  border: ${({ props }) =>
    props?.borderColor
      ? `2px solid ${handleColor(props?.borderColor)}`
      : 'none'};
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;
