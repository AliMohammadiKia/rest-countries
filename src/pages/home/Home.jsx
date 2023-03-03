import { useEffect, useState } from "react";
import axios from "axios";

import { SearchBox } from "../../components";
import { Cards } from "./";

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filterCountries, setFilterCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data);
      setFilterCountries(data);
    };

    fetchData();
  }, []);

  const handleSearchCountry = (e) => {
    const { target } = e;
    setSearchCountry(target.value);
    target.value.trim().toLowerCase()
      ? setFilterCountries(
          countries.filter(
            (c) => c.name.common.toLowerCase().indexOf(target.value) !== -1
          )
        )
      : setFilterCountries(countries);
  };

  const handleFilterCountryByRegion = (e) => {
    const { target } = e;
    target.value !== "none"
      ? setFilterCountries(countries.filter((c) => c.region === target.value))
      : setFilterCountries(countries);
  };

  return (
    <div className="lg:py-12 lg:px-20 py-8 px-5 bg-very-l-gray dark:bg-very-d-blue">
      <SearchBox
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
        handleFilterCountryByRegion={handleFilterCountryByRegion}
      />
      <Cards data={filterCountries} />
    </div>
  );
};
