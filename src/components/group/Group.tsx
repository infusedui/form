import { GroupProps } from "./Group.types";

const Group: React.FC<GroupProps> = ({ size, children }) => {
  return (
    <div className={`teaui form-group template-${size}col`}>{children}</div>
  );
};

export default Group;
