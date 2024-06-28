import DropDown from "./DropDown";
import Button from "./Button";

function Header() {
  return (
    <div className="bg-noise fixed top-0 left-0 w-full bg-pred p-6 z-10 border-b-4 border-black flex flex-row justify-between">
      <h1 className="text-4xl" style={{ fontFamily: 'Normandy Beach' }}>Sounds</h1>
      <div className="flex flex-row justify-between w-80">
        <Button Text={"About"}/>
        <DropDown />
      </div>
    </div>

  );
}

export default Header;