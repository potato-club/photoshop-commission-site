import api from './common';

export const checkApi = {
  checkJob: async () =>
    api.getWithAuth('check/enum'),

  checkWriter: async (id:any) =>
    api.getWithAuth('check/writer', id),

  checkSelectedArtist: async (id:any) =>
    api.get(`check/${id}/artist`)
};
