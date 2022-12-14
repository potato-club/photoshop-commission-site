import api from './common';

export const checkApi = {
  checkJob: async (accessToken: any, refreshToken: any) =>
    api.getWithParamsToken('check/enum', undefined, accessToken, refreshToken),

  checkWriter: async (id:any, accessToken: any, refreshToken: any) =>
    api.getWithParamsToken('check/writer', id, accessToken, refreshToken)
};
