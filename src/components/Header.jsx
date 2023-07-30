import IonIcon from "@reacticons/ionicons";

function Header() {
  return (
    <header className="py-5 border-b">
      <div className="container mx-auto flex align-middle justify-between">
        <h1 className="text-2xl">Where in the World?</h1>
        <button className="flex align-middle">
          <span className="mr-2">
            <IonIcon name="moon-outline" className="icon" />
          </span>
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
