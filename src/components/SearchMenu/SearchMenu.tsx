import { BiSearchAlt2 } from "react-icons/bi";
import { Container, Chosen } from "./SearchMenu.style";
import { useMenuContext } from "../../store/MenuProvider";
import { ActionEnum } from "../../types/types";

const SearchMenu = () => {
  const { state, dispatch } = useMenuContext();
  return (
    <Container onClick={() => dispatch({ type: ActionEnum.SHOW_DROPDOWN_MENU })}>
      <button>{state.chosenCity === "" ? "Add Location" : <Chosen>{state.chosenCity}, Finland</Chosen>}</button>
      <button>{state.guest === 0 ? "Add guest" : <Chosen>{state.guest} guests</Chosen>}</button>
      <button>
        <BiSearchAlt2 />
      </button>
    </Container>
  );
};

export default SearchMenu;
