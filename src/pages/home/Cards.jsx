import { Card } from "../../components/card";

export const Cards = ({ data }) => {
  return (
    <div className="mt-12 grid grid-cols-4 gap-x-20 gap-y-10">
      {data.map(({ name, flags, population, region, capital }, index) => {
        return (
          <Card
            key={index}
            countryName={name.common}
            countryFlag={flags.png}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </div>
  );
};
