/* eslint-disable react/prop-types */
import IonIcon from "@reacticons/ionicons";

const Control = ({ search, setSearch, region, setRegion }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-between">
      <form
        className="px-4 py-3 flex align-middle bg-white shadow-md"
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
          className="bg-transparent w-full"
        />
      </form>
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="bg-white px-4 shadow-md"
      >
        <option>Search for a region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Ocenia">Ocenia</option>
      </select>
    </div>
  );
};

export default Control;
