/* eslint-disable react/prop-types */
import IonIcon from "@reacticons/ionicons";

const DisplayCountryData = ({ country, onGoBack }) => {
  // console.log(Object.keys(country[0].name.nativeName));

  const borderCountries = [country[0].borders];
  const nativeNames = [...Object.values(country[0].name.nativeName)]
    .map((nativeName) => nativeName.common)
    .join(", ");

  const currencies = [...Object.values(country[0].currencies)]
    .map((currency) => `${currency.name}(${currency.symbol})`)
    .join(", ");

  // console.log(country[0]);

  return (
    <>
      <button className="px-6 py-3 shadow-md rounded-md" onClick={onGoBack}>
        <span className="mr-4">
          <IonIcon name="arrow-back-outline" className="icon" />
        </span>
        Back
      </button>
      <div className="mt-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5 ">
          <img src={country[0].flags.svg} alt={country[0].name.common} />
        </div>
        <div className="py-8 px-20 flex flex-col">
          <h2 className="text-2xl font-bold mb-10">{country[0].name.common}</h2>
          <div className="flex">
            <div className="flex-1">
              <p className="mb-1">
                <span className="font-semibold">Native Name: </span>
                {nativeNames}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Population: </span>
                {country[0].population}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Region: </span>
                {country[0].region}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Sub Region: </span>
                {country[0].subregion}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Capital: </span>
                {country[0].capital}
              </p>
            </div>
            <div className="flex-1">
              <p className="mb-1">
                <span className="font-semibold">Top Level Domain: </span>
                {country[0].tld}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Currencies: </span>
                {currencies}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Languages: </span>
                {Object.values(country[0].languages).join(", ")}
              </p>
            </div>
          </div>
          {borderCountries[0]?.length > 0 ? (
            <div className="mt-10">
              <span className="font-semibold">
                Border Countries:
                {borderCountries[0].map((value) => {
                  return (
                    <span
                      key={value}
                      className="px-2 mx-2 border shadow-lg font-light"
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
