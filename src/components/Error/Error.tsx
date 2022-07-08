import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  color: red;
  text-align: center;
`;

const Error: React.FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Error;
