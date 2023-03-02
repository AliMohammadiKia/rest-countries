import { SearchCountry, FilterRegion } from "./";

export const SearchBox = ({
  searchCountry,
  handleSearchCountry,
  handleFilterCountryByRegion,
}) => {
  return (
    <div className="flex justify-between items-center">
      <SearchCountry
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
      />
      <FilterRegion handleFilterCountryByRegion={handleFilterCountryByRegion} />
    </div>
  );
};
