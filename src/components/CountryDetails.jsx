/* eslint-disable react/prop-types */

import DisplayCountryData from "./DisplayCountryData";

const CountryDetails = ({
  countries,
  selectedCountry,
  onSelectCountry,
  onGoBack,
}) => {
  const filteredCountry = countries.filter(
    (country) => country.name.common === selectedCountry
  );

  let countryData = {};

  for (let i = 0; i < filteredCountry.length; i++) {
    Object.assign(countryData, filteredCountry[i]);
  }

  const borderCountries = countryData.borders
    ? [...countryData.borders]
        ?.map((borderCountry) =>
          countries.filter((country) => country.cca3 === borderCountry)
        )
        .flat()
        .map((country) => country.name.common)
    : [];

  return (
    <DisplayCountryData
      country={countryData}
      borderCountries={borderCountries}
      onGoBack={onGoBack}
      onSelectCountry={onSelectCountry}
    />
  );
};

export default CountryDetails;
