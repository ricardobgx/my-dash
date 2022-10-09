import styled from "styled-components";

export const MaterialIcon = styled.span<IMaterialIconOptions>`
  font-size: 24px;

  &.material-symbols-rounded {
    font-variation-settings: "FILL" ${({ fill }) => (fill ? 1 : 0)},
      "wght" ${({ weight }) => weight ?? 400},
      "GRAD" ${({ grade }) => grade ?? 0},
      "opsz" ${({ opticalSize }) => opticalSize ?? 48};
  }
`;
