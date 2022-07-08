import { BiSearchAlt2 } from "react-icons/bi";
import { Container } from "./SearchButton.style";
import { useMenuContext } from "../../store/MenuProvider";
import { ActionEnum } from "../../types/types";

const SearchButton = () => {
  const { dispatch, state } = useMenuContext();
  return (
    <Container
      onClick={() => {
        if (state.guest && state.chosenCity) {
          dispatch({ type: ActionEnum.FILTER_CITIES });
          dispatch({ type: ActionEnum.CLOSE_DROPDOWN_MENU });
          dispatch({ type: ActionEnum.CLEAR_ERROR });
        } else {
          dispatch({ type: ActionEnum.ERROR });
        }
      }}
    >
      <BiSearchAlt2 /> Search
    </Container>
  );
};

export default SearchButton;
