/* eslint-disable react/prop-types */
import IonIcon from "@reacticons/ionicons";

function Header({ onToggleMode, lightDarkToggle, onReset }) {
  return (
    <header
      className={`${lightDarkToggle ? "dark-module" : ""} py-6 shadow-sm`}
    >
      <div className="container mx-auto px-3 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl cursor-pointer" onClick={onReset}>
          Where in the World?
        </h1>
        <button
          className="flex align-middle font-semibold"
          onClick={onToggleMode}
        >
          <span className="mr-2">
            <IonIcon name={`${lightDarkToggle ? "sunny" : "moon"}-outline`} />
          </span>
          {lightDarkToggle ? "Light" : "Dark"} Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
