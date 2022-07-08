import React from "react";
import { Wrapper } from "./Button.style";

type Props = {
  children: string;
  toggle?: () => void;
  state: number | string;
};

const Button: React.FC<Props> = ({ children, toggle, state }) => {
  return (
    <Wrapper onClick={toggle}>
      <span>{children}</span>
      {typeof state === "string"
        ? state === ""
          ? `Add ${children}`
          : `${state}, Finland`
        : state === 0
        ? `Add ${children}`
        : `${state} guests`}
    </Wrapper>
  );
};

export default Button;
