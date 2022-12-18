import api from './common';

export const checkApi = {
  checkJob: async () =>
    api.getWithParamsToken('check/enum', undefined),

  checkWriter: async (id:any) =>
    api.getWithParamsToken('check/writer', id)
};
