import { MaterialIcon } from "../styles";

const MaterialIconRounded: React.FC<IMaterialIcon> = ({
  icon,
  options,
}): JSX.Element => {
  return (
    <MaterialIcon className="material-symbols-rounded" {...options}>
      {icon}
    </MaterialIcon>
  );
};

export default MaterialIconRounded;
