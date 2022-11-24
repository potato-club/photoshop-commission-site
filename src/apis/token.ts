import api from './common';

export const tokenApi = {
  checkJob: async (accessToken: any, refreshToken: any) =>
    api.getWithToken('check/enum', accessToken, refreshToken),

  checkWriter: async (id:any, accessToken: any, refreshToken: any) =>
    api.getWithParamsToken('check/writer', id, accessToken, refreshToken)
};
