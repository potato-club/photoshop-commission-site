import { useState } from 'react';
type Props = {
  text: string;
}
export const useTextMoreView = ({text}:Props) => {
  const limitNumber = 150;
  const [limit, setLimit] = useState(limitNumber);
  const showToggle = text.length > limit ? true : false;
  const [toggleText, setToggleText] = useState<' ...더보기' | ' 닫기'>(
    ' ...더보기',
  );

  const onClickMore = () => {
    if (toggleText === ' ...더보기') {
      setLimit(text.length-1); // * 토글을 보여주기 위해 length 에서 1을 뺌
      setToggleText(' 닫기');
    } else {
      setLimit(limitNumber);
      setToggleText(' ...더보기');
    }
  };

  const sliceText = () => {
    return text.slice(0, limit+1); // * 토글을 보여주기 위해 위에서 뺀값 1을 더함
  };

  return {
    sliceText,
    onClickMore,
    showToggle,
    toggleText,
  };
};
