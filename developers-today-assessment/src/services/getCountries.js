import { api } from '../configs/apiEndpoint';

export const getCountries = () => {
  return api
    .get('/get-countries', {})
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
