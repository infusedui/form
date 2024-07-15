import { GroupProps } from "./Group.types";

const Group: React.FC<GroupProps> = ({ size, children, className }) => {
  return (
    <div className={`teaui form-group ${className} template-${size}col`}>
      {children}
    </div>
  );
};

export default Group;
