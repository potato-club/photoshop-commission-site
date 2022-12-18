import api from './common';

export const myPageApi = {
  profile: {
    get: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage',
        undefined,
        accessToken,
        refreshToken,
      );
      return response;
    },
  },
  myPost: {
    before: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage/before',
        undefined,
        accessToken,
        refreshToken,
      );
      return response;
    },
    beforeAll: async (page: any, accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage/before/all',
        { page },
        accessToken,
        refreshToken,
      );
      if (response.data) {
        response.data = response.data.content;
      }
      return response;
    },
    complete: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage/complete',
        undefined,
        accessToken,
        refreshToken,
      );
      return response;
    },
    completeAll: async (page: number, accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage/complete/all',
        { page },
        accessToken,
        refreshToken,
      );
      if (response.data) {
        response.data = response.data.content;
      }
      return response;
    },
    requesting: async (accessToken: any, refreshToken: any) => {
      const response = await api.getWithParamsToken(
        'mypage/requesting',
        undefined,
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
        { page },
        accessToken,
        refreshToken,
      );
      if (response.data) {
        response.data = response.data.content;
      }
      return response;
    },
  },
};
