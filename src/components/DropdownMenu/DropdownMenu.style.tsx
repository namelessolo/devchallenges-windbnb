import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  width: 100%;
  background-color: white;
  margin: auto;
  padding: 32px 50px;
  max-width: 1260px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  font-family: ${(props) => props.theme.fonts.Mulish};

  @media (min-width: ${(props) => props.theme.medium}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  p svg {
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(2);
    }
  }
`;

export const Edit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  grid-column: 1/4;
  grid-row: 1/2;
`;
