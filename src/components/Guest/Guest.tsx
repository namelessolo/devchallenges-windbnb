import { Wrapper, TypeContainer, Buttons } from "./Guest.style";
import { useMenuContext } from "../../store/MenuProvider";
import { ActionEnum } from "../../types/types";
import { AnimatePresence } from "framer-motion";

const Guest = () => {
  const { state, dispatch } = useMenuContext();
  return (
    <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="guests">
      <TypeContainer>
        <p>Adults</p>
        <p>Ages 13 or above</p>
        <Buttons>
          <button
            onClick={() => {
              dispatch({ type: ActionEnum.REMOVE_ADULTS });
              dispatch({ type: ActionEnum.REMOVE_GUEST });
            }}
            disabled={!state.adults}
          >
            -
          </button>
          <span>{state.adults}</span>
          <button
            onClick={() => {
              dispatch({ type: ActionEnum.ADD_ADULTS });
              dispatch({ type: ActionEnum.ADD_GUEST });
            }}
          >
            +
          </button>
        </Buttons>
      </TypeContainer>
      <TypeContainer>
        <p>Children</p>
        <p>Ages 2-12</p>
        <Buttons>
          <button
            onClick={() => {
              dispatch({ type: ActionEnum.REMOVE_CHILDREN });
              dispatch({ type: ActionEnum.REMOVE_GUEST });
            }}
            disabled={!state.children}
          >
            -
          </button>
          <span>{state.children}</span>
          <button
            onClick={() => {
              dispatch({ type: ActionEnum.ADD_CHILDREN });
              dispatch({ type: ActionEnum.ADD_GUEST });
            }}
          >
            +
          </button>
        </Buttons>
      </TypeContainer>
    </Wrapper>
  );
};

export default Guest;
