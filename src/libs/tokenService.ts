import Cookies from 'universal-cookie';

const KEY = {
  ACCESS: 'access',
  REFRESH: 'refresh',
};

const getCookie = (name: string) => {
  const cookies = new Cookies();
  return cookies.get(name);
};

export const tokenService = {
  getAccessToken: () => sessionStorage.getItem(KEY.ACCESS) ?? '',
  getRefreshToken: () => getCookie('refresh') ?? '',
};
