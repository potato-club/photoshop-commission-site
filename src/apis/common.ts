import axios from 'axios';
import { setting } from 'src/constants/setting';
import { tokenService } from 'src/libs/tokenService';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string, params?: any) =>
    await axios.get(setting.baseUrl + url, params),

  getWithAuth: async (url: string, params?: any) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    if (accessToken && refreshToken) {
      return await axios.get(setting.baseUrl + url, {
        params,
        headers: {
          authorization: accessToken,
          refreshToken,
        },
      });
    } else {
      return await axios.get(setting.baseUrl + url, params);
    }
  },

  post: async (url: string, data: any) =>
    await axios.post(setting.baseUrl + url, data),

  postWithAuth: async (url: string, data?: any) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    return await axios.post(setting.baseUrl + url, data, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    });
  },

  put: async (url: string, data?: any) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    return await axios.put(setting.baseUrl + url, data, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    });
  },

  delete: async (url: string) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();
    return await axios.delete(setting.baseUrl + url, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    });
  },
};
