import styled from "styled-components";

export const NavbarLinkContainer = styled.div<INavbarLinkContainerProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 50px;
  padding-left: 20px;

  color: #b8b8b8;

  position: relative;

  border-radius: 8px;

  cursor: pointer;

  transition: all 200ms linear;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
  }

  &:hover {
    color: ${({ hoverColor }) => hoverColor ?? "#0070f3"};
    background: rgba(0, 0, 0, 0.03);
  }

  &::before {
    content: "";

    height: 0%;
    width: 5px;

    background: #0070f3;

    position: absolute;
    top: 50%;
    left: 0px;

    border-radius: 5px;

    transform: translateY(-50%);

    transition: all 200ms linear;
  }

  &.selected {
    color: #0070f3;

    &::before {
      height: 100%;
    }
  }
`;
export const NavbarLinkLabel = styled.p``;
