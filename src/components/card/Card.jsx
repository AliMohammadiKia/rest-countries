export const Card = ({
  countryName,
  countryFlag,
  population,
  region,
  capital,
}) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md">
      <img
        src={countryFlag}
        alt={countryName}
        className="h-44 bg-contain w-full"
      />
      <div className="py-5 pl-5">
        <p className="font-extrabold text-lg">{countryName}</p>
        <div className="pt-4 pb-5 font-semibold flex flex-col space-y-1">
          <p>
            Population: <span className="font-normal">{population}</span>
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
