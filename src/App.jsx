import { useState } from "react";
// import { countryData } from "../data";

import { useFetch } from "./components/useFetch";

import Header from "./components/Header";
import Control from "./components/Control";
import CountryList from "./components/CountryList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [viewDetails, setViewDetails] = useState(false);

  const {
    fetchedData: countries,
    isLoading,
    error,
  } = useFetch("https://restcountries.com/v3.1/all");

  function handleSelectCountry(name) {
    setViewDetails(true);
    setSelectedCountry(name);
    setSearch("");
  }

  function handleGoBack() {
    setViewDetails(false);
  }

  return (
    <>
      <Header />
      <main className="bg-slate-50 py-10">
        <div className="container mx-auto ">
          {!viewDetails && (
            <Control
              search={search}
              setSearch={setSearch}
              region={region}
              setRegion={setRegion}
            />
          )}

          {!viewDetails && isLoading && <Loader />}
          {!viewDetails && !isLoading && !error && (
            <CountryList
              countries={countries}
              onSelectCountry={handleSelectCountry}
              search={search}
              region={region}
            />
          )}

          {viewDetails && !isLoading && !error && (
            <CountryDetails
              countries={countries}
              selectedCountry={selectedCountry}
              onGoBack={handleGoBack}
              onSelectCountry={handleSelectCountry}
            />
          )}

          {!viewDetails && error && <ErrorMessage message={error} />}
        </div>
      </main>
    </>
  );
}

export default App;
