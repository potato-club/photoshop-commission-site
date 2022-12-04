import { useCookies } from 'src/hooks/useCookies';
import api from './common';

export const boardApi = {
  
  // 게시글 작성
  create: async (data: any, accessToken: any, refreshToken: any) =>
    api.postWithToken('list/create', data, accessToken, refreshToken),
  
  // 게시글 수정
  update: async(id:any, data: any, accessToken: any, refreshToken: any) =>
    api.put(`list/${id}`, data, accessToken, refreshToken),

  // 게시글 삭제
  delete: async(id:any, accessToken: any, refreshToken: any) =>
    api.delete(`list/${id}`, accessToken, refreshToken),

  // 게시글 불러오기 (디테일)
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