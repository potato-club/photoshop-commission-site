import api from './common';

export const stateApi = {
  getBeforeAll: async (page: number) => api.get(`main/before/all`, { page }),

  getCompleteAll: async (page: number) =>
    api.get(`main/complete/all`, { page }),

  getRequestingAll: async (page: number) =>
    api.get(`main/requesting/all`, { page }),

  getFilterNickName: async (keyword: string, page: number) => {
    return await api.get(`filter/nickname`, { keyword, page });
  },

  getFilterTitle: async (keyword: string, page: number) => {
    return await api.get(`filter/title`, {keyword, page});
  },
};
