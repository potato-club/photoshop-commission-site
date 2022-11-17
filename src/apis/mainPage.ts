import api from './common';

export const mainApi = {
  getBefore: async () => api.get('main/before'),

  getBeforeAll: async () => api.get('main/before/all'),

  getComplete: async () => api.get('main/complete'),

  getCompleteAll: async () => api.get('main/complete/all'),

  getRequesting: async () => api.get('main/requesting'),

  getRequestingAll: async () => api.get('main/requesting/all'),
};
