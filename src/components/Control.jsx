/* eslint-disable react/prop-types */
import IonIcon from "@reacticons/ionicons";

const Control = ({ search, setSearch, region, setRegion, lightDarkToggle }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-between md:flex-row flex-col">
      <form
        className={`${
          lightDarkToggle ? "dark-module" : ""
        } px-4 py-3 my-2 flex  align-middle rounded-lg shadow-md`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="search">
          <span className="mr-3">
            <IonIcon name="search" className="icon" />
          </span>
        </label>
        <input
          type="text"
          placeholder="Search for a country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" bg-transparent w-full focus:outline-none"
        />
      </form>
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className={`${
          lightDarkToggle ? "dark-module" : ""
        } px-4 py-3 shadow-md bg-transparent rounded-lg my-2`}
      >
        <option value="">Search for a region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Control;
