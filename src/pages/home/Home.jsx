import { useEffect, useState } from "react";
import axios from "axios";

import { SearchBox } from "../../components";
import { Cards } from "./";

export const Home = () => {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-12 px-20 bg-[#fafafa]">
      <SearchBox />
      <Cards data={countries} />
    </div>
  );
};
