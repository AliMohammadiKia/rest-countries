import { SearchCountry, FilterRegion } from "./";

export const SearchBox = () => {
  return (
    <div className="flex justify-between items-center">
      <SearchCountry />
      <FilterRegion />
    </div>
  );
};
