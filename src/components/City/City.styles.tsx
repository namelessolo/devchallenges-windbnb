import styled from "styled-components";

export const Wrapper = styled.li`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 18px 0;
  position: relative;
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.colors["4F4F4F"]};
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors["4F4F4F"]};
  }
`;
