import NavbarLink from "../NavbarLink";
import { NavbarFixedLinksContainer } from "./styles";

const NavbarFixedLinks: React.FC<INavbarFixedLinksProps> = ({
  currentPath,
}): JSX.Element => {
  return (
    <NavbarFixedLinksContainer>
      <NavbarLink
        currentPath={currentPath}
        link={{ label: "Configurações", icon: "settings", path: "/settings" }}
      />
      <NavbarLink
        currentPath={currentPath}
        link={{ label: "Sair", icon: "logout", path: "/logout" }}
        hoverColor={"#F3001D"}
      />
    </NavbarFixedLinksContainer>
  );
};

export default NavbarFixedLinks;
