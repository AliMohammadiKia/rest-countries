export const FilterRegion = () => {
  return (
    <div className="w-full flex flex-row-reverse">
      <select
        name="filterRegion"
        id="filterRegion"
        className="py-4 px-4 shadow-md text-sm rounded-md"
      >
        <option value="none">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
