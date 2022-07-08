import { ReactComponent as Logo } from "../../assets/logo.svg";
import SearchMenu from "../SearchMenu/SearchMenu";
import { Container } from "./Menu.style";

const Menu = () => {
  return (
    <Container>
      <Logo />
      <SearchMenu />
    </Container>
  );
};

export default Menu;
