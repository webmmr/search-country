import { useEffect, useState } from "react";

import Header from "./components/Header";
import Control from "./components/Control";
import CountryList from "./components/CountryList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [lightDarkToggle, setLightDarkToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [viewDetails, setViewDetails] = useState(false);

  function handleSelectCountry(name) {
    setViewDetails(true);
    setSelectedCountry(name);
    setSearch("");
  }

  function handleGoBack() {
    setViewDetails(false);
  }

  const toggleDarkMode = () => {
    setLightDarkToggle((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (!lightDarkToggle) {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    }

    return () => {
      body.classList.remove("dark-mode"); // Clean up the class on unmount
    };
  }, [lightDarkToggle]);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setCountries(data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Header onToggleMode={toggleDarkMode} lightDarkToggle={lightDarkToggle} />
      <main className="py-10">
        <div className="container mx-auto px-3">
          {!viewDetails && (
            <Control
              search={search}
              setSearch={setSearch}
              region={region}
              setRegion={setRegion}
              lightDarkToggle={lightDarkToggle}
            />
          )}

          {!viewDetails && isLoading && <Loader />}
          {!viewDetails && !isLoading && !error && (
            <CountryList
              countries={countries}
              onSelectCountry={handleSelectCountry}
              search={search}
              region={region}
              lightDarkToggle={lightDarkToggle}
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
