import { createContext, useContext, useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries';
import { getFlags } from '../services/getFlags';
import { getPopulation } from '../services/getPopulation';

const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [population, setPopulation] = useState([]);
  const [flags, setFlags] = useState([]);

  //   async function fetchCountries() {
  //     const result = await getCountries();
  //     setCountries(result);
  //     console.log(result);
  //     return result;
  //   }
  //   async function fetchFlags() {
  //     const result = await getFlags();
  //     setFlags(result);
  //     console.log(result);
  //     return result;
  //   }
  //   async function fetchPopulation() {
  //     const result = await getPopulation();
  //     setPopulation(result);
  //     console.log(result);
  //     return result;
  //   }

  //   useEffect(() => {
  //     const countries = fetchCountries();
  //     const flags = fetchFlags();
  //     const population = fetchPopulation();

  //     setCountries(countries);
  //     setFlags(flags);
  //     setPopulation(population);
  //   }, []);

  return (
    <CountryContext.Provider value={{ countries, flags, population }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    return;
  }
  return context;
};
