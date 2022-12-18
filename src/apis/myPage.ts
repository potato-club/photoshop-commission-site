import api from './common';

export const myPageApi = {
  profile: {
    get: async () => {
      const response = await api.getWithParamsToken('mypage', undefined);
      return response;
    },
  },
  myPost: {
    before: async () => {
      const response = await api.getWithParamsToken('mypage/before', undefined);
      return response;
    },
    beforeAll: async (page: any) => {
      const response = await api.getWithParamsToken('mypage/before/all', {
        page,
      });
      if (response.data) {
        response.data = response.data.content;
      }
      return response;
    },
    complete: async () => {
      const response = await api.getWithParamsToken(
        'mypage/complete',
        undefined,
      );
      return response;
    },
    completeAll: async (page: number) => {
      const response = await api.getWithParamsToken('mypage/complete/all', {
        page,
      });
      if (response.data) {
        response.data = response.data.content;
      }
      return response;
    },
    requesting: async () => {
      const response = await api.getWithParamsToken(
        'mypage/requesting',
        undefined,
      );
      return response;
    },
    requestingAll: async (page: number) => {
      const response = await api.getWithParamsToken('mypage/requesting/all', {
        page,
      });
      if (response.data) {
        response.data = response.data.content;
      }
      return response;
    },
  },
};
