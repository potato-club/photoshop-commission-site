import { useRouter } from 'next/router';
import { infoModal } from 'src/utils/interactionModal';
import { useGetToken } from './useGetToken';
import { useSessionStorage } from './useSessionStorage';

export const useKaKaoLogin = () => {
  const router = useRouter();
  const { resetToken } = useGetToken();
  const { setSessionStorage, removeSessionStorage } = useSessionStorage();

  const login = () => {
    router.push({
      pathname: process.env.NEXT_PUBLIC_PATHNAME,
      query: {
        response_type: process.env.NEXT_PUBLIC_RESPONSE_TYPE,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      },
    });
  };
  const logout = () => {
    resetToken();
    removeSessionStorage('job');
    setSessionStorage('nickname', 'GUEST');
    infoModal('로그아웃이 완료되었습니다.', 'success', undefined, () =>
      router.push('/main'),
    );
  };

  return {
    login,
    logout,
  };
};
