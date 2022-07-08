import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  border: 1px solid #f2f2f2;
  overflow: hidden;
  margin-bottom: 18px;

  @media (min-width: ${(props) => props.theme.medium}) {
    display: flex;
    flex-direction: row;
    grid-column: 1/3;
    grid-row: 2/3;
    align-self: center;
  } ;
`;
