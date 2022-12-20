import api from './common';
import { EditProfileType } from './myPage.type';

export const myPageApi = {
  profile: {
    get: async () => {
      const response = await api.getWithParamsToken('mypage', undefined);
      return response;
    },
    edit: async (params: EditProfileType) => {
      const response = await api.put('mypage/update', params);
      return response;
    },
  },
  myQuest: {
    list: async (page: number) => {
      const response = await api.getWithParamsToken('mypage/participate', {
        page,
      });
      if (response.data) {
        response.data = response.data.content;
      }
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
