import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  height: 55px;
  font-size: ${(props) => props.theme.sizes[14]}px;
  font-weight: ${(props) => props.theme.weights[400]};
  padding: 12px 24px;
  border: none;
  width: 100%;
  gap: 4px;
  position: relative;

  &:last-child {
    border-top: 1px solid #f2f2f2;
  }

  @media (min-width: ${(props) => props.theme.medium}) {
    border-left: 1px solid #f2f2f2;
    &:last-child {
      border-top: 0;
    }
  }

  span {
    font-size: ${(props) => props.theme.sizes[9]}px;
    font-weight: ${(props) => props.theme.weights[800]};
    text-transform: uppercase;
  }
  &:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors["4F4F4F"]};
  }
`;
