import React from "react";
import { AxiosResponse } from "axios";

interface IProps {
  error: AxiosResponse;
  text?: string;
}

const ErrorMessage: React.FC<IProps> = ({ error, text }) => {
  return (
    <div className="text-danger small validation-summary-errors">
      <p>{error.statusText}</p>
      <ul>
        {JSON.stringify(error.data)}
        {/* {Object.values(error.data.errors)
          .flat()
          .map((err: any, i) => (
            <li key={i}>{err}</li>
          ))} */}
      </ul>
    </div>
  );
};

export default ErrorMessage;
