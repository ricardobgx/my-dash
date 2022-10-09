import Link from "next/link";
import MaterialIconRounded from "../../../atoms/Global/Icon/MaterialIcon/Rounded";
import { LogoContainer, LogoLabel } from "./styles";

const Logo: React.FC = (): JSX.Element => {
  return (
    <Link href="/">
      <LogoContainer>
        <MaterialIconRounded
          icon="dashboard"
          options={{ weight: 700, fill: true }}
        />
        <LogoLabel>MyDash</LogoLabel>
      </LogoContainer>
    </Link>
  );
};

export default Logo;
