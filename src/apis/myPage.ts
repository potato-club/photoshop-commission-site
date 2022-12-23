import api from './common';
import { EditProfileType, PostReviewType } from './myPage.type';

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
  rate: {
    myGrade: async () => {
      const response = await api.getWithParamsToken('mypage/grade', undefined);

      return response;
    },
    list: async (page: number) => {
      const response = await api.getWithParamsToken('mypage/review', {
        page,
      });
      if (response.data) {
        response.data = response.data.content;
      }
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
  myComment: {
    list: async (page: number) => {
      const response = await api.getWithParamsToken('mypage/comments', {
        page,
      });
      if (response.data) {
        response.data = response.data.content;
      }
      return response;
    },
  },
  myReview: {
    list: async (page: number) => {
      const response = await api.getWithParamsToken('mypage/boards', {
        page,
      });
      if (response.data) {
        response.data = response.data.content;
      }
      return response;
    },
    post: async (param: PostReviewType) => {
      const response = await api.postWithToken('mypage/review/write', param);

      return response;
    },
  },
  signOut: async () => {
    const response = await api.delete('mypage/resign');

    return response;
  },
};
