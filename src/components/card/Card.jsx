import { useNavigate } from "react-router-dom";
import { separate } from "../../utils";

export const Card = ({
  countryName,
  countryFlag,
  population,
  region,
  capital,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (cName) => {
    navigate(`/${cName}`);
  };

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md hover:scale-105 transition-all">
      <img
        src={countryFlag}
        alt={countryName}
        className="h-44 bg-contain w-full hover:cursor-pointer"
        onClick={() => handleNavigate(countryName)}
      />
      <div className="py-5 pl-5">
        <p
          className="font-extrabold text-lg hover:cursor-pointer"
          onClick={() => handleNavigate(countryName)}
        >
          {countryName}
        </p>
        <div className="pt-4 pb-5 font-semibold flex flex-col space-y-1">
          <p>
            Population:{" "}
            <span className="font-normal">{separate(population)}</span>
          </p>
          <p>
            Region: <span className="font-normal">{region}</span>
          </p>
          <p>
            Capital: <span className="font-normal">{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
