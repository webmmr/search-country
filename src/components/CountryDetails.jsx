/* eslint-disable react/prop-types */
// import { useFetch } from "./useFetch";
import DisplayCountryData from "./DisplayCountryData";
// import Loader from "./Loader";
// import ErrorMessage from "./ErrorMessage";

const CountryDetails = ({ countries, selectedCountry }) => {
  // console.log(selectedCountry);

  // const {
  //   fetchedData: countryData,
  //   isLoading,
  //   error,
  // } = useFetch(
  //   "https://restcountries.com/v3.1/name/",
  //   `${selectedCountry}?fullText=true`
  // );

  // console.log(countryData, isLoading, error);

  const countryData = countries.filter(
    (country) => country.name.common === selectedCountry
  );

  return (
    // <div className="container mx-auto">
    //   {isLoading && <Loader />}

    //   {!isLoading && !error && <DisplayCountryData countryData={countryData} />}

    //   {error && <ErrorMessage message={error} />}
    // </div>

    <DisplayCountryData country={countryData} />
  );
};

export default CountryDetails;
