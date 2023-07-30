/* eslint-disable react/prop-types */
import IonIcon from "@reacticons/ionicons";

const DisplayCountryData = ({ country }) => {
  console.log(country[0]);
  return (
    <>
      <button className="px-6 py-3 shadow-md rounded-md">
        <span className="mr-2">
          <IonIcon name="arrow-back-outline" className="icon" />
        </span>
        Back
      </button>
      <div className="mt-10 flex">
        <div>
          <img src={country[0].flags.svg} alt={country[0].name.common} />
        </div>
        <div>
          <h2>{country[0].name.common}</h2>
          <div>
            <p>
              <span className="font-semibold">Native Name: </span>
              {country[0].name.nativeName.aym.official}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {country[0].population}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {country[0].region}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>
              {country[0].subregion}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              {country[0].capital}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {country[0].tld}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {country[0].currencies.PEN.name}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {Object.values(country[0].languages)
                .map((i) => country[0].languages[i])
                .join(", ")}
            </p>
          </div>
        </div>
        <div>
          <span>Border Countries: </span>
        </div>
      </div>
    </>
  );
};

export default DisplayCountryData;
