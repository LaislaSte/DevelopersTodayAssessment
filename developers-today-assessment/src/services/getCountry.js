import { api } from '../configs/apiEndpoint';

export const getCountry = (iso3) => {
  return api
    .get(`/get-country/${iso3}`, {})
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
