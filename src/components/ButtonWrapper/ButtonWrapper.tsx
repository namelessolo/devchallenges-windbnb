import Button from "../Button/Button";
import { Wrapper } from "./ButtonWrapper.style";
import { useMenuContext } from "../../store/MenuProvider";
import { ActionEnum } from "../../types/types";

const ButtonWrapper: React.FC = () => {
  const { state, dispatch } = useMenuContext();
  return (
    <Wrapper>
      <Button toggle={() => dispatch({ type: ActionEnum.TOGGLE_LOCATION })} state={state.chosenCity}>
        Location
      </Button>
      <Button toggle={() => dispatch({ type: ActionEnum.TOGGLE_GUESTS })} state={state.guest}>
        Guest
      </Button>
    </Wrapper>
  );
};

export default ButtonWrapper;
