import api from './common';

export const mainApi = {
  getBefore: async () => api.get('main/before'),

  getComplete: async () => api.get('main/complete'),

  getRequesting: async () => api.get('main/requesting'),
};
