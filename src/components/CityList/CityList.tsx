import { Wrapper } from "./CityList.styles";
import City from "../City/City";
import { data } from "../../data/stays";
const cities = new Set(data.map((city) => city.city));
const sortedCities = [...cities].sort();

const CityList = () => {
  return (
    <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {sortedCities.map((city) => {
        return <City key={city} city={city} />;
      })}
    </Wrapper>
  );
};

export default CityList;
