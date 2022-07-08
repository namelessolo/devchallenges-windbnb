export type ApartmentType = {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number | null;
  photo: string;
  id: number;
};

export enum ActionEnum {
  SHOW_DROPDOWN_MENU = "SHOW_DROPDOWN_MENU",
  CLOSE_DROPDOWN_MENU = "CLOSE_DROPDOWN_MENU",
  TOGGLE_LOCATION = "TOGGLE_LOCATION",
  TOGGLE_GUESTS = "TOGGLE_GUESTS",
  CHOOSE_CITY = "CHOOSE_CITY",
  ADD_GUEST = "ADD_GUEST",
  REMOVE_GUEST = "REMOVE_GUEST",
  ADD_CHILDREN = "ADD_CHILDREN",
  REMOVE_CHILDREN = "REMOVE_CHILDREN",
  ADD_ADULTS = "ADD_ADULTS",
  REMOVE_ADULTS = "REMOVE_ADULTS",
  FILTER_CITIES = "FILTER_CITIES",
  ERROR = "ERROR",
  CLEAR_ERROR = "CLEAR_ERROR",
}
