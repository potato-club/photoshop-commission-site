import { useCookies } from 'src/hooks/useCookies';
import api from './common';

export const boardApi = {
  create: async (data: any, accessToken: any, refreshToken: any) => api.boardPostTest('list/create', data, accessToken, refreshToken),
};
