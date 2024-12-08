import React from "react";

interface ButtonProps {
  bgColor: string;
  textColor: string;
  onClick?: () => void;
  title: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  bgColor,
  textColor,
  onClick,
  title,
}) => {
  return (
    <a
      onClick={onClick}
      className={`bg-[${bgColor}] text-[${textColor}] px-8 py-4 rounded-lg shadow-lg hover:opacity-80 transition duration-300`}
    >
      {title}
    </a>
  );
};

export default Button;
