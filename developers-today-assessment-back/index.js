import axios from 'axios';
import express from 'express';
import cors from 'cors';

// 1. **Endpoint: Get Available Countries**
//     - Create an API endpoint, using Date Nager API `https://date.nager.at/api/v3/AvailableCountries`
//     - This endpoint should return a list of available countries.
// 2. **Endpoint: Get Country Info**
//     - Create an API endpoint to retrieve detailed information about a specific country.
//     - This endpoint should provide the following data:
//     a. **List of Border Countries**: A list of countries that share a border with the selected country `https://date.nager.at/api/v3/CountryInfo/UA`
//     b. **Population Data**: Historical population data for the country, suitable for plotting on a chart `https://countriesnow.space/api/v0.1/countries/population`
//     c. **Flag URL**: A URL to the country’s flag image `https://countriesnow.space/api/v0.1/countries/flag/images`

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
    credentials: false,
    optionSuccessStatus: 200,
  })
);

app.get('/get-countries', async (req, res) => {
  const countries = await axios.get(
    'https://date.nager.at/api/v3/AvailableCountries',
    {}
  );

  res.send(countries.data);
});

app.get('/get-flags', async (req, res) => {
  const imgFlags = await axios.get(
    'https://countriesnow.space/api/v0.1/countries/flag/images',
    {}
  );

  res.send(imgFlags.data);
});

app.get('/get-population', async (req, res) => {
  const populationHist = await axios.get(
    'https://countriesnow.space/api/v0.1/countries/population',
    {}
  );

  res.send(populationHist.data);
});

app.get('/get-country/:country', async (req, res) => {
  const bordersCountries = await axios.get(
    `https://date.nager.at/api/v3/CountryInfo/${req.params.country}`,
    {}
  );
  const countriesPopulationHist = await axios.get(
    `https://countriesnow.space/api/v0.1/countries/population`,
    {}
  );
  const flagsURL = await axios.get(
    `https://countriesnow.space/api/v0.1/countries/flag/images`,
    {}
  );

  const findedCountryPop = countriesPopulationHist.data.data.find(
    (value) => value.iso3 == req.params.country
  );
  const findedCountryFlag = flagsURL.data.data.find(
    (value) => value.iso3 == req.params.country
  );

  const result = {
    countryName: req.params.country,
    bordersCountries: bordersCountries.data,
    population: findedCountryPop,
    flag: findedCountryFlag.flag,
  };

  console.log(result);

  res.send(result);
});

app.listen(8000, () => {
  console.log('server running');
});
