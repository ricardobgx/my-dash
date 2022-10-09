import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarCustomLinks from "../NavbarCustomLinks";
import NavbarFixedLinks from "../NavbarFixedLinks";
import { NavbarLinksContainer } from "./styles";

const NavbarLinks: React.FC = (): JSX.Element => {
  const router = useRouter();

  const [currentPath, setCurrentPath] = useState(router.pathname);

  const links: INavbarLink[] = [
    {
      label: "Finanças",
      icon: "attach_money",
      path: "/finance",
    },
    {
      label: "Estudos",
      icon: "local_library",
      path: "/studies",
    },
    {
      label: "Metas",
      icon: "track_changes",
      path: "/goals",
    },
  ];

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  console.log(currentPath);

  return (
    <NavbarLinksContainer>
      <NavbarCustomLinks currentPath={currentPath} links={links} />
      <NavbarFixedLinks currentPath={currentPath} />
    </NavbarLinksContainer>
  );
};

export default NavbarLinks;
