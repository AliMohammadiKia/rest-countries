import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchCountry = () => {
  return (
    <div className="relative w-full">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute text-sm text-gray-400 top-[18px] left-7 cursor-pointer"
      />
      <input
        type="text"
        name="searchCountry"
        id="searchCountry"
        placeholder="Search for a country ..."
        className="bg-white py-4 px-16 w-2/3 shadow-md text-sm rounded-md"
      />
    </div>
  );
};
