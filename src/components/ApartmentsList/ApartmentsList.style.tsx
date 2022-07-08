import styled from "styled-components";

export const Container = styled.div`
  font-family: ${(props) => props.theme.fonts.Montserrat};
  color: ${(props) => props.theme.colors[333333]};
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    @media (min-width: ${(props) => props.theme.medium}) {
      display: grid;
      grid-template-columns: repeat(2, minmax(380px, 1fr));
      gap: 50px 32px;
    }

    @media (min-width: ${(props) => props.theme.big}) {
      display: grid;
      grid-template-columns: repeat(3, minmax(380px, 1fr));
      gap: 50px 32px;
    }
  }
  li {
    list-style-type: none;
    height: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    font-size: ${(props) => props.theme.sizes[18]}px;
    font-weight: ${(props) => props.theme.weights[700]};
    @media (min-width: ${(props) => props.theme.medium}) {
      font-size: ${(props) => props.theme.sizes[24]}px;
    }
  }

  span {
    font-size: ${(props) => props.theme.sizes[14]}px;
    font-weight: ${(props) => props.theme.weights[500]};
    color: ${(props) => props.theme.colors["4F4F4F"]};
  }
`;
