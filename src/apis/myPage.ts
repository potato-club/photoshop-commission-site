import api from './common';

export const myPageApi = {
  profile: {
    get: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithToken(
        'mypage',
        accessToken,
        refreshToken,
      );
      return response.data;
    },
  },
};
