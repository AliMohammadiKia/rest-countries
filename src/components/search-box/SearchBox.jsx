import { SearchCountry, FilterRegion } from "./";

export const SearchBox = ({
  searchCountry,
  handleSearchCountry,
  handleFilterCountryByRegion,
}) => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row justify-between items-baseline">
      <SearchCountry
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
      />
      <FilterRegion handleFilterCountryByRegion={handleFilterCountryByRegion} />
    </div>
  );
};
