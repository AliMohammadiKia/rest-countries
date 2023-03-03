import { SearchCountry, FilterRegion } from "./";

export const SearchBox = ({
  searchCountry,
  handleSearchCountry,
  handleFilterCountryByRegion,
}) => {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row justify-between items-center">
      <SearchCountry
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
      />
      <FilterRegion handleFilterCountryByRegion={handleFilterCountryByRegion} />
    </div>
  );
};
