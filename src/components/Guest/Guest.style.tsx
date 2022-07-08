import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 18px 0 0 30px;
  grid-column: 2/3;
  grid-row: 3/4;
`;

export const TypeContainer = styled.div`
  p {
    color: ${(props) => props.theme.colors[333333]};
  }
  p + p {
    color: ${(props) => props.theme.colors.BDBDBD};
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0 52px 0;
  button {
    background-color: white;
    border: 1px solid #828282;
    border-radius: 4px;
    width: 23px;
    height: 23px;
    display: grid;
    place-items: center;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors.BDBDBD};
    }
  }

  button:first-child {
    padding-bottom: 2px;
  }

  span {
    margin: 0 15px;
  }
`;
