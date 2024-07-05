import DropDown from "./DropDown";
import Button from "./Button";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-pred  border-b-2 border-black flex flex-row justify-between h-16 px-12 items-center">
      <div className="text-2xl" style={{ fontFamily: 'Normandy Beach' }}>Sounds</div>
      <div className="flex flex-row justify-between w-80">
        <Button Text={"About"}/>
        <DropDown />
      </div>
    </div>

  );
}

export default Header;