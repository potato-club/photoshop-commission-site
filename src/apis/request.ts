import api from './common';

export const requestApi = {
  chooseArtist: async (id: any, data:any, accessToken: any, refreshToken: any) =>
    api.postWithToken(`list/${id}/artist`, data, accessToken, refreshToken),
  getRequestUserList: async (id:any, data:any, accessToken:any, refreshToken:any) =>
    api.getWithParamsToken(`list/${id}/request`, data, accessToken, refreshToken),
  acceptRequest: async(id:any, accessToken:any, refreshToken: any) =>
    api.postWithToken(`list/${id}/request`, undefined,accessToken, refreshToken),
};
