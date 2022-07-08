import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  border: 1px solid #f2f2f2;
  width: fit-content;
  overflow: hidden;
  cursor: pointer;

  button {
    background-color: ${(props) => props.theme.colors.white};
    height: 55px;
    display: grid;
    place-items: center;
    border: 1px solid #f2f2f2;
    padding: 0 16px;
    cursor: pointer;
  }

  svg {
    fill: ${(props) => props.theme.colors.EB5757};
    width: 24px;
    height: 24px;
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.colors["4F4F4F"]};
  }
`;

export const Chosen = styled.span`
  color: ${(props) => props.theme.colors[333333]};
`;
