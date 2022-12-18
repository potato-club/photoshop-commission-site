import api from './common';

export const requestApi = {
  // 커미션 디자이너 선택
  chooseArtist: async (id: any, data:any, accessToken: any, refreshToken: any) =>
    api.postWithToken(`list/${id}/artist`, data, accessToken, refreshToken),
  
    // 커미션 신청 디자이너 리스트 출력
    getRequestUserList: async (id:any, data:any, accessToken:any, refreshToken:any) =>
    api.getWithParamsToken(`list/${id}/request`, data, accessToken, refreshToken),
  
    // 커미션 신청
    acceptRequest: async(id:any, accessToken:any, refreshToken: any) =>
    api.postWithToken(`list/${id}/request`, undefined,accessToken, refreshToken),

  // 커미션 신청 취소
  cancelRequest: async(id: any, accessToken:any, refreshToken: any) =>
    api.put(`list/${id}/request`, undefined,accessToken, refreshToken),
};
