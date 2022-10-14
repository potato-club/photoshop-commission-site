import Cookies, { Cookie, CookieSetOptions } from 'universal-cookie';

export function useCookies() {
  const cookies = new Cookies();

  const setCookie = (name: string, value: Cookie, option?: CookieSetOptions) => {
    return cookies.set(name, value, { ...option });
  };

  const getCookie = (name:string) => {
    return cookies.get(name);
  };

  return {
    setCookie,
    getCookie
  };
}
