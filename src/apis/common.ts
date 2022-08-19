import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  post: async (url: string, params: any) =>
    await axios.post('https://www.photoshopcommission.shop/' + url, params),
};
