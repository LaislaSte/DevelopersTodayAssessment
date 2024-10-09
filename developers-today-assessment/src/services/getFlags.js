import { api } from '../configs/apiEndpoint';

export const getFlags = () => {
  return api
    .get(`/get-flags`, {})
    .then((result) => {
      return result.data?.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
