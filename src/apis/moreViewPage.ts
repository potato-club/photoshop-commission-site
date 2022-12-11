import api from './common';

export const stateApi = {
  getBeforeAll: async (page: number) => api.get(`main/before/all?page=${page}`),

  getCompleteAll: async (page: number) =>
    api.get(`main/complete/all?page=${page}`),

  getRequestingAll: async (page: number) =>
    api.get(`main/requesting/all?page=${page}`),

  getFilterNickName: async (keyword: string, page: number) => {
    return await api.get(`filter/nickname?keyword=${keyword}&page=${page}`);
  },

  getFilterTitle: async (keyword: string, page: number) => {
    return await api.get(`filter/title?keyword=${keyword}&page=${page}`);
  },
};
