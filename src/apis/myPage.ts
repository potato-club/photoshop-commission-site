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
  myPost: {
    before: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithToken(
        'mypage/before',
        accessToken,
        refreshToken,
      );
      return response.data;
    },
    beforeAll: async (page: number, accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage/before/all',
        page,
        accessToken,
        refreshToken,
      );
      return response.data;
    },
    complete: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithToken(
        'mypage/complete',
        accessToken,
        refreshToken,
      );
      return response.data;
    },
    completeAll: async (page: number, accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage/complete/all',
        page,
        accessToken,
        refreshToken,
      );
      return response.data;
    },
    requesting: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithToken(
        'mypage/requesting',
        accessToken,
        refreshToken,
      );
      return response.data;
    },
    requestingAll: async (
      page: number,
      accessToken: any,
      refreshToken: any,
    ) => {
      const response = await api.getWithParamsToken(
        'mypage/requesting/all',
        page,
        accessToken,
        refreshToken,
      );
      return response.data;
    },
  },
};
