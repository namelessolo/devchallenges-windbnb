import { Container } from "./App.style";
import Menu from "./components/Menu/Menu";
import ApartmentsList from "./components/ApartmentsList/ApartmentsList";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import { useMenuContext } from "./store/MenuProvider";
import Modal from "./components/Modal/Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const { state } = useMenuContext();

  return (
    <Container>
      <Menu />
      <ApartmentsList />
      <AnimatePresence>
        {state.dropdownMenu && (
          <Modal>
            <DropdownMenu />
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default App;
