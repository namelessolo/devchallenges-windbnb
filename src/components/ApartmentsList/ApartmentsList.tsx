import Apartment from "../Apartment/Apartment";
import { Container, Title } from "./ApartmentsList.style";
import { useMenuContext } from "../../store/MenuProvider";

const ApartmentsList = () => {
  const { state } = useMenuContext();
  return (
    <Container>
      <Title>
        <h1>Stays in Finland</h1>
        <span>{state.apartments.length} stays</span>
      </Title>
      <ul>
        {state.apartments.map(({ id, beds, photo, rating, superHost, title, type }) => {
          return (
            <li key={id}>
              <Apartment beds={beds} photo={photo} rating={rating} superHost={superHost} title={title} type={type} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ApartmentsList;
