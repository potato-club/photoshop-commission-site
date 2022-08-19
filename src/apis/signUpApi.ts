import api from './common';

export const signUpApi = {
  signUp: async (data: any) => api.post('signup/first', data),
};
