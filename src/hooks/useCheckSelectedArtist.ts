import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { checkApi } from 'src/apis/check';
import { useLoginToken } from './useLoginToken';
import { useState, useEffect } from 'react';
import { useSessionStorage } from './useSessionStorage';

export const useCheckSelectedArtist = () => {
  const router = useRouter();
  const { access, refresh } = useLoginToken();
  const [selectedArtist, setSelectedArtist] = useState<boolean>();
  const { getSessionStorage } = useSessionStorage();
  const job = getSessionStorage('job');

  useQuery(
    ['checkSelectedArtist', router.query.id],
    () => checkApi.checkSelectedArtist(router.query.id),
    {
      enabled: !!access && !!refresh && router.isReady && job === 'ARTIST',
      onSuccess: ({ data }) => {
        setSelectedArtist(data);
      },
      onError: error => {
        alert('사용자정보 체크오류');
        return false;
      },
    },
  );

  return {
    selectedArtist,
  };
};
