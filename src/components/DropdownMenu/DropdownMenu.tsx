import { GrClose } from "react-icons/gr";
import ButtonWrapper from "../ButtonWrapper/ButtonWrapper";
import CityList from "../CityList/CityList";
import Guest from "../Guest/Guest";
import SearchButton from "../SearchButton/SearchButton";
import { Wrapper, Edit } from "./DropdownMenu.style";
import { useMenuContext } from "../../store/MenuProvider";
import { ActionEnum } from "../../types/types";
import Error from "../Error/Error";

const variants = {
  open: { y: 0, x: "-50%" },
  closed: { y: -300, x: "-50%" },
};

const DropdownMenu = () => {
  const { state, dispatch } = useMenuContext();

  //animate={state.dropdownMenu ? "open" : "closed"} variants={variants}

  return (
    <Wrapper>
      <Edit>
        <p>Edit your search</p>
        <p>
          <GrClose onClick={() => dispatch({ type: ActionEnum.CLOSE_DROPDOWN_MENU })} />
        </p>
      </Edit>
      <ButtonWrapper />
      {state.showLocation && <CityList />}
      {state.showGuest && <Guest />}
      <SearchButton />
      {state.error && <Error>{state.error}</Error>}
    </Wrapper>
  );
};

export default DropdownMenu;
