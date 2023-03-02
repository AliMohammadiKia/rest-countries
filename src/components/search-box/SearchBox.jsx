import { SearchCountry, FilterRegion } from "./";

export const SearchBox = ({ searchCountry, handleSearchCountry }) => {
  return (
    <div className="flex justify-between items-center">
      <SearchCountry
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
      />
      <FilterRegion />
    </div>
  );
};
