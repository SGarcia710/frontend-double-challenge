import React from "react";
import "../assets/styles/Input.css";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>((props, ref) => {
  return <input ref={ref} {...props} className="input-field" />;
});
