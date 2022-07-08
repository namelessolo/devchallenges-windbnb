import { MdLocationOn } from "react-icons/md";
import { Wrapper } from "./City.styles";
import { useMenuContext } from "../../store/MenuProvider";
import { ActionEnum } from "../../types/types";

type Props = {
  city: string;
};

const City: React.FC<Props> = ({ city }) => {
  const { dispatch } = useMenuContext();
  return (
    <Wrapper onClick={() => dispatch({ type: ActionEnum.CHOOSE_CITY, payload: city })}>
      <MdLocationOn /> {city}, Finland
    </Wrapper>
  );
};

export default City;
