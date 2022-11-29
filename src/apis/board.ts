import { useCookies } from 'src/hooks/useCookies';
import api from './common';

export const boardApi = {
  
  create: async (data: any, accessToken: any, refreshToken: any) =>
    api.postWithToken('list/create', data, accessToken, refreshToken),

  // detail 페이지
  getDetail: async (id: any) => api.get(`list/${id}`),

  // 댓글 작성
  postComment: async (
    id: any,
    data: any,
    accessToken: any,
    refreshToken: any,
  ) => api.postWithToken(`list/${id}/comments/parent`, data, accessToken, refreshToken),

  // 대댓글 작성
    postReply: async (
    id: any,
    data: any,
    accessToken: any,
    refreshToken: any,
  ) => api.postWithToken(`list/${id}/comments/child`, data, accessToken, refreshToken),
};
