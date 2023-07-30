import { useState } from "react";
// import { countryData } from "../data";

import Header from "./components/Header";
import { useFetch } from "./components/useFetch";

import CountryList from "./components/CountryList";

import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [query, setQuery] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [viewDetails, setViewDetails] = useState(false);

  // console.log(countryData[40]);

  // https://restcountries.com/v3.1/all

  const {
    fetchedData: countries,
    isLoading,
    error,
  } = useFetch("https://restcountries.com/v3.1/", query);

  function handleSelectCountry(name) {
    setViewDetails(true);
    setSelectedCountry(name);
  }

  function handleGoBack() {
    setViewDetails(false);
  }

  return (
    <>
      <Header />
      <main className="bg-slate-50 py-10">
        <div className="container mx-auto ">
          {!viewDetails && isLoading && <Loader />}
          {!viewDetails && !isLoading && !error && (
            <CountryList
              countries={countries}
              onSelectCountry={handleSelectCountry}
            />
          )}

          {viewDetails && !isLoading && !error && (
            <CountryDetails
              countries={countries}
              selectedCountry={selectedCountry}
              onGoBack={handleGoBack}
            />
          )}

          {!viewDetails && error && <ErrorMessage message={error} />}
        </div>
      </main>
    </>
  );
}

export default App;
