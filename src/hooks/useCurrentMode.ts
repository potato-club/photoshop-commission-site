import { useSelector } from 'react-redux';
import { RootState } from 'src/redux-toolkit/store';

export const useCurrentMode = () => {
  const backgroundColor = useSelector(
    (state: RootState) => state.darkModeOnOff.mode.backgroundColor,
  );
  const fontColor = useSelector(
    (state: RootState) => state.darkModeOnOff.mode.fontColor,
  );

  return { backgroundColor, fontColor };
};
