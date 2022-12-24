import api from './common';

export const signUpApi = {
  signUp: async (data: any) => api.post('signup', data),

  checkUser: async (data: any) => api.get('check/user', data),

  checkNickname: async (data: any) => api.get('signup/checkbox', data),
};
