export const FilterRegion = ({ handleFilterCountryByRegion }) => {
  return (
    <div className="w-full flex flex-row-reverse">
      <select
        name="filterRegion"
        id="filterRegion"
        className="py-4 px-4 shadow-md text-sm rounded-md bg-white dark:bg-d-blue dark:text-very-l-gray"
        onChange={handleFilterCountryByRegion}
      >
        <option value="none">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
