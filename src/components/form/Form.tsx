import { FormProps } from "./Form.types";

const Form: React.FC<FormProps> = ({ children, handler, encType }) => {
  return (
    <form
      onSubmit={handler}
      encType={encType ? encType : ""}
      className="teaui form"
    >
      {children}
    </form>
  );
};

export default Form;
