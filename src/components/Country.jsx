/* eslint-disable react/prop-types */
const Country = ({ country, onSelectCountry, lightDarkToggle }) => {
  // console.log(typeof country);
  if (Object.keys(country).length === 0) console.log("hi");
  return (
    <li
      onClick={() => onSelectCountry(country.name.common)}
      className="cursor-pointer"
    >
      <div
        className={`${
          lightDarkToggle ? "dark-module" : ""
        } rounded-lg shadow-lg`}
      >
        <div className="h-[220px]">
          <img
            src={`${country.flags.svg}`}
            alt={`${country.name.common}`}
            className="h-[220px] w-full rounded-t-lg"
          />
        </div>
        <div className="lg:p-8 p-4">
          <h3 className="font-bold text-xl mb-4">{country.name.common}</h3>
          <p>
            <span className="font-semibold">Population: </span>
            {country.population}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Country;
