import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button {...props} style={{ borderRadius: "4em" }}>
      {label}
    </button>
  );
};

export default Button;
