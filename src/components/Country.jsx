/* eslint-disable react/prop-types */
const Country = ({ country, onSelectCountry }) => {
  return (
    <li
      onClick={() => onSelectCountry(country.name.common)}
      className="bg-white shadow-md rounded-md"
      style={{ cursor: "pointer" }}
    >
      <div className="card">
        <img
          src={`${country.flags.svg}`}
          alt={`${country.name.common}`}
          className="h-[200px] w-full"
        />
        <div className="card-body p-8">
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
