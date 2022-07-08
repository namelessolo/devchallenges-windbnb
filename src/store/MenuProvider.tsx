import React, { useReducer, PropsWithChildren, useContext } from "react";
import { data } from "../data/stays";
import { ApartmentType } from "../types/types";
import { ActionEnum } from "../types/types";

type State = {
  showLocation: boolean;
  showGuest: boolean;
  dropdownMenu: boolean;
  chosenCity: string;
  guest: number;
  adults: number;
  children: number;
  apartments: ApartmentType[];
  error: string;
};

type Action = {
  type: ActionEnum;
  payload?: string;
};

type Context = {
  state: State;
  dispatch: ({ type, payload }: Action) => void;
};

const initialState = {
  dropdownMenu: false,
  showLocation: false,
  showGuest: false,
  chosenCity: "",
  guest: 0,
  adults: 0,
  children: 0,
  apartments: data,
  error: "",
};

const filterCities = (city: string, guests: number, apartments: ApartmentType[]) => {
  const filteredData = apartments.filter(
    (apartment) => apartment.city === city && (!apartment.beds ? apartment : apartment.beds >= guests)
  );
  return filteredData;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionEnum.SHOW_DROPDOWN_MENU:
      return { ...state, dropdownMenu: true };
    case ActionEnum.CLOSE_DROPDOWN_MENU:
      return { ...state, dropdownMenu: false };
    case ActionEnum.TOGGLE_LOCATION:
      return { ...state, showLocation: !state.showLocation };
    case ActionEnum.TOGGLE_GUESTS:
      return { ...state, showGuest: !state.showGuest };
    case ActionEnum.CHOOSE_CITY:
      return { ...state, chosenCity: action.payload || "" };
    case ActionEnum.ADD_GUEST:
      return { ...state, guest: state.guest + 1 };
    case ActionEnum.REMOVE_GUEST:
      return { ...state, guest: state.guest - 1 };
    case ActionEnum.ADD_CHILDREN:
      return { ...state, children: state.children + 1 };
    case ActionEnum.REMOVE_CHILDREN:
      return { ...state, children: state.children - 1 };
    case ActionEnum.ADD_ADULTS:
      return { ...state, adults: state.adults + 1 };
    case ActionEnum.REMOVE_ADULTS:
      return { ...state, adults: state.adults - 1 };
    case ActionEnum.FILTER_CITIES:
      return { ...state, apartments: filterCities(state.chosenCity, state.guest, data) };
    case ActionEnum.ERROR:
      return { ...state, error: "You must choose location and number of guests" };
    case ActionEnum.CLEAR_ERROR:
      return { ...state, error: "" };
    default:
      throw new Error(`No case for type ${action.type} found.`);
  }
};

const MenuContext = React.createContext<Context>({
  dispatch: () => {},
  state: initialState,
});

export const useMenuContext = () => useContext(MenuContext);

const MenuProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <MenuContext.Provider value={{ dispatch, state }}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
