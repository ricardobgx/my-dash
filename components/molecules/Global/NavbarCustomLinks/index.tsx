import NavbarLink from "../NavbarLink";
import { NavbarCustomLinksContainer } from "./styles";

const NavbarCustomLinks: React.FC<INavbarCustomLinksProps> = ({
  currentPath,
  links,
}): JSX.Element => {
  return (
    <NavbarCustomLinksContainer>
      {links.map((link) => (
        <NavbarLink key={link.label} currentPath={currentPath} link={link} />
      ))}
    </NavbarCustomLinksContainer>
  );
};

export default NavbarCustomLinks;
