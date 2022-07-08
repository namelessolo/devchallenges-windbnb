import React from "react";
import { AiFillStar } from "react-icons/ai";

import {
  Container,
  Caption,
  Header,
  Rating,
  SuperHost,
  Title,
} from "./Apartment.style";

type Props = {
  superHost: boolean;
  title: string;
  rating: number;
  type: string;
  beds: number | null;
  photo: string;
};

const Apartment: React.FC<Props> = ({
  beds,
  photo,
  rating,
  superHost,
  title,
  type,
}) => {
  return (
    <Container>
      <img src={photo} alt="" />
      <Caption>
        <Header>
          <span>
            {superHost && <SuperHost>SUPER HOST</SuperHost>} {type}
            {beds && ` . ${beds} beds`}
          </span>
          <Rating>
            <AiFillStar />
            {rating.toFixed(2)}
          </Rating>
        </Header>
        <Title>{title}</Title>
      </Caption>
    </Container>
  );
};

export default Apartment;
