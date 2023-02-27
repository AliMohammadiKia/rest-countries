import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export const Navbar = () => {
  return (
    <div className="py-6 px-20 bg-white shadow-md flex justify-between items-center">
      <div>
        <h1 className="font-extrabold text-2xl">Where in the world?</h1>
      </div>
      <div className="flex space-x-2 items-center cursor-pointer">
        <FontAwesomeIcon icon={faMoon} className="text-lg" />
        <p className="font-semibold">Dark Mode</p>
      </div>
    </div>
  );
};
