interface INavbarLinkContainerProps {
  hoverColor?: string;
}

interface INavbarLinkProps extends INavbarLinkContainerProps {
  currentPath: string;
  link: INavbarLink;
}
