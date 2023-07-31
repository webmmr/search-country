/* eslint-disable react/prop-types */
import Country from "./Country";

const CountryList = ({
  countries,
  onSelectCountry,
  search,
  region,
  lightDarkToggle,
}) => {
  let searchResults;

  if (region === "") {
    if (search.length >= 0 && search.length < 3)
      searchResults = countries.map((country) => (
        <Country
          key={country.name.common}
          country={country}
          onSelectCountry={onSelectCountry}
          lightDarkToggle={lightDarkToggle}
        />
      ));

    if (search.length >= 3)
      searchResults = countries
        .filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
        .map((country) => (
          <Country
            country={country}
            key={country.name.common}
            onSelectCountry={onSelectCountry}
            lightDarkToggle={lightDarkToggle}
          />
        ));
  } else {
    if (search.length >= 0 && search.length < 3)
      searchResults = countries
        .filter((country) => country.region === region)
        .map((country) => (
          <Country
            key={country.name.common}
            country={country}
            onSelectCountry={onSelectCountry}
            lightDarkToggle={lightDarkToggle}
          />
        ));

    if (search.length >= 3)
      searchResults = countries
        .filter((country) => country.region === region)
        .filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
        .map((country) => (
          <Country
            country={country}
            key={country.name.common}
            onSelectCountry={onSelectCountry}
            lightDarkToggle={lightDarkToggle}
          />
        ));
  }

  return (
    <>
      <ul className="grid lg:gap-20 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {searchResults.length > 0 ? searchResults : "Sorry, no country found"}
      </ul>
    </>
  );
};

export default CountryList;
