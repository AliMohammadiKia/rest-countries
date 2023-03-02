import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { separate } from "../../utils";
import { BorderCountry } from "./BorderCountry";

export const Country = () => {
  const { cName } = useParams();
  const [country, setCountry] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${cName}?fullText=true`
      );
      setCountry(data[0]);
    };

    fetchData();
  }, [cName]);

  return (
    <div className="py-12 px-20 bg-[#fafafa]">
      <button
        className="bg-white py-2 px-10 w-[10%] rounded-md shadow-md flex space-x-4 items-center justify-evenly"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </button>
      {country ? (
        <div className="pt-12 flex">
          <div className="w-6/12">
            <img
              src={country?.flags?.png}
              alt={country?.flags?.alt}
              className="w-8/12 h-80"
            />
          </div>
          <div className="w-6/12 py-6">
            <h2 className="font-extrabold text-3xl pb-5">
              {country?.name?.common}
            </h2>
            <div className="flex pb-8">
              <div className="w-6/12 font-semibold space-y-2">
                <p>
                  Native Name:{" "}
                  <span className="font-light">
                    {
                      country?.name?.nativeName[
                        Object.keys(country.name.nativeName).pop()
                      ].common
                    }
                  </span>
                </p>
                <p>
                  Population:{" "}
                  <span className="font-light">
                    {separate(country?.population)}
                  </span>
                </p>
                <p>
                  Region: <span className="font-light">{country?.region}</span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span className="font-light">{country?.subregion}</span>
                </p>
                <p>
                  Capital:{" "}
                  <span className="font-light">{country?.capital[0]}</span>
                </p>
              </div>
              <div className="w-6/12 font-semibold space-y-2">
                <p>
                  Top Level Domain:{" "}
                  <span className="font-light">{country?.tld[0]}</span>
                </p>
                <p>
                  Currencies:{" "}
                  <span className="font-light">
                    {
                      country?.currencies[
                        Object.keys(country.currencies).shift()
                      ].name
                    }
                  </span>
                </p>
                <p>
                  Languages:{" "}
                  <span className="font-light">
                    {Object.values(country?.languages).join(", ")}
                  </span>
                </p>
              </div>
            </div>
            {country?.borders && (
              <div className="flex items-baseline space-x-4">
                <p className="font-semibold">Border Countries:</p>
                <div className="flex space-x-2 space-y-4 flex-wrap items-baseline justify-center">
                  {country?.borders.map((cName, index) => (
                    <BorderCountry cName={cName} key={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>loading ...</div>
      )}
    </div>
  );
};
