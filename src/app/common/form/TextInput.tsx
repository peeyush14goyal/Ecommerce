import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";

interface IProps extends FieldRenderProps<string, HTMLElement> {}

const TextInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Fragment>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        width={width}
        className={
          touched && error
            ? "form-control form-control-sm is-invalid focus-visible"
            : "form-control form-control-sm"
        }
      />
      {touched && error && (
        <span className="error invalid-feedback">{error}</span>
      )}
    </Fragment>
  );
};

export default TextInput;
