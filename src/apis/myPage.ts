import api from './common';

export const myPageApi = {
  profile: {
    get: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithToken(
        'mypage',
        accessToken,
        refreshToken,
      );
      return response;
    },
  },
  myPost: {
    before: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithToken(
        'mypage/before',
        accessToken,
        refreshToken,
      );
      return response;
    },
    beforeAll: async (page: number, accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage/before/all',
        page,
        accessToken,
        refreshToken,
      );
      return response;
    },
    complete: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithToken(
        'mypage/complete',
        accessToken,
        refreshToken,
      );
      return response;
    },
    completeAll: async (page: number, accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage/complete/all',
        page,
        accessToken,
        refreshToken,
      );
      return response;
    },
    requesting: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithToken(
        'mypage/requesting',
        accessToken,
        refreshToken,
      );
      return response;
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
      return response;
    },
  },
};
