import IonIcon from "@reacticons/ionicons";
import { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="searchBox">
      <form className="px-4 py-3 flex align-middle bg-white shadow-md">
        <label htmlFor="search">
          <span className="mr-3">
            <IonIcon name="search" className="icon" />
          </span>
        </label>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent"
        />
      </form>
    </div>
  );
};

export default Form;
