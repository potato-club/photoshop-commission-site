import { useRouter } from 'next/router';
import { tokenService } from 'src/utils/useToken';

const CheckToken = () => {
  const router = useRouter();
  const { code } = router.query;
  if (code) {
    console.log(code);
    tokenService.setToken(String(code));
  }

  return <div></div>;
};
export default CheckToken;
