import React from "react";
import "../assets/styles/Input.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <div className="input-container">
        <p className="input-label">{props.label}</p>
        <input ref={ref} {...props} className="input-field" />
      </div>
    );
  }
);
