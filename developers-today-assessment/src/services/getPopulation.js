import { api } from '../configs/apiEndpoint';

export const getPopulation = () => {
  return api
    .get(`/get-population`, {})
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
