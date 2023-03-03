import { Card } from "../../components/card";

export const Cards = ({ data }) => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-20 gap-y-10">
      {data.map(({ name, flags, population, region, capital }, index) => (
        <Card
          key={index}
          countryName={name.common}
          countryFlag={flags.png}
          flagAlt={flags.alt}
          population={population}
          region={region}
          capital={capital}
        />
      ))}
    </div>
  );
};
