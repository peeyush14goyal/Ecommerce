import React, { Fragment } from "react";
import { FieldRenderProps } from "react-final-form";
import { DateTimePicker } from "react-widgets";

interface IProps extends FieldRenderProps<Date, HTMLElement> {}

const DateInput: React.FC<IProps> = ({
  id = null,
  input,
  width,
  placeholder,
  date = false,
  time = false,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Fragment>
      <DateTimePicker
        containerClassName={
          touched && error
            ? "form-control form-control-sm is-invalid focus-visible"
            : "form-control form-control-sm"
        }
        placeholder={placeholder}
        value={input.value || null}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onKeyDown={(e) => e.preventDefault()}
        date={date}
        time={time}
        {...rest}
      />
      {touched && error && (
        <span className="error invalid-feedback">{error}</span>
      )}
    </Fragment>
  );
};

export default DateInput;
