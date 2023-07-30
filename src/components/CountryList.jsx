/* eslint-disable react/prop-types */
import Country from "./Country";

const CountryList = ({ countries, onSelectCountry, search, region }) => {
  return (
    <>
      <ul className="grid gap-20 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        {search.length >= 3 &&
          countries
            .filter((country) =>
              country.name.common.toLowerCase().includes(search.toLowerCase())
            )
            .map((country) => (
              <Country
                country={country}
                key={country.name.common}
                onSelectCountry={onSelectCountry}
              />
            ))}
        {region &&
          countries
            .filter((country) => country.region === region)
            .map((country) => (
              <Country
                country={country}
                key={country.name.common}
                onSelectCountry={onSelectCountry}
              />
            ))}
        {countries.map((country) => (
          <Country
            country={country}
            key={country.name.common}
            onSelectCountry={onSelectCountry}
          />
        ))}
      </ul>
    </>
  );
};

export default CountryList;
