import styled from "styled-components";

export const Container = styled.button`
  width: 125px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.EB5757};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 16px;
  padding: 15px 25px;
  margin: 0 auto;
  grid-column: 3/4;
  grid-row: 2/3;
  align-self: center;
  margin-bottom: 18px;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;
