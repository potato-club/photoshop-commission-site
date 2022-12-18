import { useRouter } from 'next/router';
import { pathName } from 'src/constants/pathName';
import { useGetToken } from 'src/hooks/useGetToken';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import { infoModal } from 'src/utils/interactionModal';

export const useOption = () => {
  const { resetToken } = useGetToken();
  const router = useRouter();
  const { removeSessionStorage, setSessionStorage } = useSessionStorage();

  const handleClickLogout = () => {
    resetToken();
    removeSessionStorage('job');
    setSessionStorage('nickname', 'GUEST');
    infoModal('로그아웃이 완료되었습니다.', 'success', undefined, () => {
      router.push(pathName.INDEX);
    });
  };
  const handleClickSignout = () => {};

  return { handleClickLogout, handleClickSignout };
};
