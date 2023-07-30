/* eslint-disable react/prop-types */
import Country from "./Country";
import Form from "./Form";
const CountryList = ({ countries, onSelectCountry }) => {
  return (
    <>
      <Form />
      <ul className="grid gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
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
