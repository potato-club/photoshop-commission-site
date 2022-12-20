import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { checkApi } from 'src/apis/check';
import { useGetToken } from './useGetToken';
import { useState, useEffect } from 'react';
import { useSessionStorage } from './useSessionStorage';

export const useCheckSelectedArtist = () => {
  const router = useRouter();
  const { access, refresh } = useGetToken();
  const [selectedArtist, setSelectedArtist] = useState<boolean>();
  const { getSessionStorage } = useSessionStorage();
  const job = getSessionStorage('job');

  useQuery(
    ['checkSelectedArtist', router.query.id],
    () => checkApi.checkSelectedArtist(router.query.id),
    {
      enabled: !!access && !!refresh && router.isReady && job === 'ARTIST',
      onSuccess: ({data}) => {
        console.log('아티스트 체크',data);
        setSelectedArtist(data);
      },
      onError: error => {
        alert('사용자정보 체크오류');
        return false;
      },
    },
  );

  useEffect(() => {
    console.log(selectedArtist);
  }, [selectedArtist]);

  return {
    selectedArtist,
  };
};
