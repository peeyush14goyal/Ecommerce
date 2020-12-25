import React, { Fragment } from 'react';
import { FieldRenderProps } from "react-final-form";

interface IProps extends FieldRenderProps<string, HTMLElement> {}

const TextAreaInput: React.FC<IProps> = ({
    input,
    rows,
    placeholder,
    meta: { touched, error }
}) => {
    return (
        <Fragment>
      <textarea
        rows={rows}
        {...input}
        placeholder={placeholder}
        className={
          touched && error
            ? "form-control is-invalid focus-visible"
            : "form-control"
        }
      />
      {touched && error && (
        <span className="error invalid-feedback">{error}</span>
      )}
    </Fragment>
    )
}

export default TextAreaInput;