import styled from "styled-components";

export const Container = styled.figure`
  font-size: ${(props) => props.theme.sizes[12]}px;

  @media (min-width: ${(props) => props.theme.medium}) {
    font-size: ${(props) => props.theme.sizes[14]}px;
  }
  img {
    width: 100%;
    aspect-ratio: 1.46;
    object-fit: cover;
    border-radius: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors["4F4F4F"]};
  font-weight: ${(props) => props.theme.weights[500]};
`;

export const SuperHost = styled.span`
  padding: 7px 10px;
  border: 1px solid ${(props) => props.theme.colors["4F4F4F"]};
  border-radius: 12px;
  font-weight: ${(props) => props.theme.weights[700]};
  font-size: ${(props) => props.theme.sizes[10]}px;
  @media (min-width: ${(props) => props.theme.medium}) {
    font-size: ${(props) => props.theme.sizes[12]}px;
  }
`;

export const Caption = styled.figcaption`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;

  svg {
    fill: ${(props) => props.theme.colors.EB5757};
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors[333333]};
  font-weight: ${(props) => props.theme.weights[600]};
  font-size: ${(props) => props.theme.sizes[14]}px;
  @media (min-width: ${(props) => props.theme.medium}) {
    font-size: ${(props) => props.theme.sizes[16]}px;
  }
`;
