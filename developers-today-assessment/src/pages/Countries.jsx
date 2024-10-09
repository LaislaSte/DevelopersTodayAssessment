import { useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries';
import { getFlags } from '../services/getFlags';
import CountryCard from '../components/CountryCard';
import { getCountry } from '../services/getCountry';
import { useNavigate } from 'react-router-dom';

const Countries = () => {
  // const [countries, setCountries] = useState([]);
  // const [flags, setFlags] = useState(null);

  // useEffect(() => {
  //   getFlags()
  //     .then((flags) => {
  //       console.log('FLAGS: ', flags);
  //       setFlags(flags);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   getCountries()
  //     .then((countries) => {
  //       console.log('countries: ', countries);
  //       setCountries(countries);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const navigate = useNavigate();

  const getCountryByName = (name) => {
    navigate(`/country/${name}`);
  };

  return (
    <div className="bg-slate-100">
      <h1 className="bg-green-600 font-extrabold text-5xl p-10 text-white">
        Existent Countrys
      </h1>
      <div className="flex justify-around gap-8 flex-wrap">
        <CountryCard
          name="Afeganistão"
          code="AFG"
          imgURL="https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Afghanistan_%28Colored_Emblem%29.svg"
          getCountry={getCountryByName}
        />
      </div>
      {/* <div className=" bg-slate-500 flex gap-8 flex-wrap"> */}
      {/* {flags?.map((country, index) => (
          <div key={index}>
            <img src={country?.flag} alt="" srcSet="" />
            <p>{country?.flag}</p>
            <p>{country?.name}</p>
          </div>
        ))} */}
      {/* </div> */}
    </div>
  );
};

export default Countries;
