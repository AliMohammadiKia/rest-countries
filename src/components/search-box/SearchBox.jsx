import { SearchCountry, FilterRegion } from "./";

export const SearchBox = () => {
  return (
    <div className="py-12 px-20 flex justify-between items-center">
      <SearchCountry />
      <FilterRegion />
    </div>
  );
};
