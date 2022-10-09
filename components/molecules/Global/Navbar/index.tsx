import Logo from "../Logo";
import NavbarLinks from "../NavbarLinks";
import { NavbarContainer } from "./styles";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavbarLinks />
    </NavbarContainer>
  );
};

export default Navbar;
