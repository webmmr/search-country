/* eslint-disable react/prop-types */
import IonIcon from "@reacticons/ionicons";
import millify from "millify";

const DisplayCountryData = ({
  country,
  borderCountries,
  onGoBack,
  onSelectCountry,
}) => {
  const nativeNames = [...Object.values(country.name.nativeName)]
    .map((nativeName) => nativeName.common)
    .join(", ");

  const currencies = [...Object.values(country.currencies)]
    .map((currency) => `${currency.name}(${currency.symbol})`)
    .join(", ");

  return (
    <>
      <button className="px-8 py-2 shadow-lg rounded-md" onClick={onGoBack}>
        <span className="mr-4">
          <IonIcon name="arrow-back-outline" className="icon" />
        </span>
        Back
      </button>
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-2/5 basis-2/5">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full"
          />
        </div>
        <div className="py-8 px-20 flex flex-col">
          <h2 className="text-2xl font-bold mb-10">{country.name.common}</h2>
          <div className="flex">
            <div className="flex-1 mr-5">
              <p className="mb-1">
                <span className="font-semibold">Native Name: </span>
                {nativeNames}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Area: </span>
                {`${millify(country.area)} sqkm`}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Population: </span>
                {millify(country.population)}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="flex-1">
              <p className="mb-1">
                <span className="font-semibold">Timezone: </span>
                {country.timezones}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Top Level Domain: </span>
                {country.tld}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Currencies: </span>
                {currencies}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Languages: </span>
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>
          {borderCountries.length > 0 ? (
            <div className="mt-10">
              <span className="font-semibold">
                Border Countries:
                {borderCountries.map((value) => {
                  return (
                    <span
                      key={value}
                      className="inline-block px-2 py-1 m-2 shadow-lg bg-opacity-95 hover:cursor-pointer font-light rounded-sm"
                      onClick={() => onSelectCountry(value)}
                    >
                      {value}
                    </span>
                  );
                })}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayCountryData;
