import { useNavigate, useParams } from 'react-router-dom';
import { getCountry } from '../services/getCountry';
import { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    getCountry(name)
      .then((country) => {
        setCountry(country);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const getCountryByName = (name) => {
    navigate(`/country/${name}`);
  };

  return (
    <div>
      <h1 className="bg-green-600 font-extrabold text-5xl p-10 text-white">
        Country {country?.countryName}
      </h1>

      <div className="flex bg-slate-500 justify-around">
        <div>
          <h1>Country</h1>
          {country?.countryName}
        </div>
        <img src={country?.flag} alt="" srcSet="" width="40%" />
      </div>

      <div className="flex justify-around gap-8 flex-wrap">
        {country?.bordersCountries?.borders.map((neightbor, index) => (
          <CountryCard
            key={index}
            name={neightbor?.commonName}
            code={neightbor?.countryCode}
            getCountry={getCountryByName}
          />
        ))}
      </div>
    </div>
  );
};

export default Country;
