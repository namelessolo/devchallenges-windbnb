import styled from "styled-components";

export const Container = styled.header`
  font-family: ${(props) => props.theme.fonts.Mulish};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px 0;
  margin-bottom: 40px;
  font-size: ${(props) => props.theme.sizes[14]}px;
  color: ${(props) => props.theme.colors.BDBDBD};
  font-weight: ${(props) => props.theme.weights};
  svg {
    margin-right: auto;
  }
`;
