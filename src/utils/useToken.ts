const tokenKey = 'TOKEN';

export const tokenService = {
  getToken: () => {
    localStorage.getItem(tokenKey) ?? '';
  },
  setToken: (token:string) => {
    localStorage.setItem(tokenKey, token);
  },
  resetToken: () => {
    localStorage.removeItem(tokenKey);
  }
};
