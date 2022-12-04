import axios from 'axios';
import { setting } from 'src/constants/setting';
import { useCookies } from 'src/hooks/useCookies';
import { useGetToken } from "src/hooks/useGetToken";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string) => await axios.get(setting.baseUrl + url),

  getWithParams: async (url: string, params: any) =>
    await axios.get(setting.baseUrl + url, params),

  getWithToken: async (url: string, accessToken: any, refreshToken: any) =>
    await axios.get(setting.baseUrl + url, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    }),

  getWithParamsToken: async (
    url: string,
    params: any,
    accessToken: any,
    refreshToken: any,
  ) =>
    await axios.get(setting.baseUrl + url, {
      params,
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    }),

  post: async (url: string, data: any) =>
    await axios.post(setting.baseUrl + url, data),

  postWithToken: async (
    url: string,
    data: any,
    accessToken: any,
    refreshToken: any,
  ) =>
    await axios.post(setting.baseUrl + url, data, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    }),

  put: async (url: string, data: any, accessToken: any, refreshToken: any) =>
    await axios.put(setting.baseUrl + url, data, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    }),

  delete: async (url: string, accessToken: any, refreshToken: any) =>
    await axios.delete(setting.baseUrl + url, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    }),
};
