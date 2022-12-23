import api from './common';

export const requestApi = {
  // 커미션 디자이너 선택
  chooseArtist: async (id: any, data: any) =>
    api.postWithAuth(`list/${id}/artist`, data),

  // 커미션 신청 디자이너 리스트 출력
  getRequestUserList: async (id: any, data: any) =>
    api.getWithAuth(`list/${id}/request`, data),

  // 커미션 신청
  acceptRequest: async (id: any) =>
    api.postWithAuth(`list/${id}/request`),

  // 커미션 신청 취소
  cancelRequest: async (id: any) => api.put(`list/${id}/request`),

  // 커미션 파일 업로드 (디자이너)
  uploadFile: async (id: any, data: any) =>
    api.postWithAuth(`list/${id}/upload`, data),

  // 작업파일 확인하기
  viewOutput: async(id:any) => 
    api.getWithAuth(`list/${id}/output`)
};
