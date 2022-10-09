import Link from "next/link";
import MaterialIconRounded from "../../../atoms/Global/Icon/MaterialIcon/Rounded";
import { NavbarLinkContainer, NavbarLinkLabel } from "./styles";

const NavbarLink: React.FC<INavbarLinkProps> = ({
  currentPath,
  link,
  hoverColor,
}): JSX.Element => {
  const { label, icon, path } = link;

  return (
    <Link href={path}>
      <NavbarLinkContainer
        className={`${path === currentPath && "selected"}`}
        hoverColor={hoverColor}
      >
        <MaterialIconRounded icon={icon} />
        <NavbarLinkLabel>{label}</NavbarLinkLabel>
      </NavbarLinkContainer>
    </Link>
  );
};

export default NavbarLink;
