import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const BorderCountry = ({ cName }) => {
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchCountryByShortName = async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${cName}`
      );
      setCountry(data);
    };

    fetchCountryByShortName();
  }, [cName]);

  return country ? (
    <Link
      className="py-1 px-8 bg-white dark:bg-d-blue dark:text-very-l-gray shadow-md text-sm hover:shadow-lg transition-all"
      to={`/${country[country.length - 1].name.common}`}
    >
      {country[country.length - 1].name.common}
    </Link>
  ) : null;
};
