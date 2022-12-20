import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { requestApi } from 'src/apis/request';
import { ImageType } from 'src/types/image.type';

export const useCheckOutput = () => {
  const router = useRouter();
  const [output, setOutput] = useState<{ image: ImageType[] } | null>();

  useQuery(
    ['checkOutput', router.query.id],
    () => requestApi.viewOutput(router.query.id),
    {
      enabled: router.isReady,
      onSuccess: ({ data }) => {
        setOutput(data);
        console.log(data);
      },
      onError: error => {
        alert('결과파일 받아오기 오류');
        return false;
      },
    },
  );

  return {
    output,
  };
};
