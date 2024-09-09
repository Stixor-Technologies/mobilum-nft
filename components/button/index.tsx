import React, { ButtonHTMLAttributes, FC } from "react";

interface BaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: string;
  variant: "primary" | "secondary";
}

const Button: FC<BaseProps> = ({ variant, styles, ...props }) => {
  const getVariant = () => {
    switch (variant) {
      case "primary":
        return " bg-gradient-green text-light-green max-w-[11.25rem] h-[3.125rem]";
      case "secondary":
        return "bg-white text-black max-w-[11.875rem] h-[2.5rem]";

      default:
        return "";
    }
  };

  const { ...rest } = props;
  return (
    <button
      className={`button-clip flex w-full items-center justify-center text-lg font-bold  ${getVariant()} ${styles}`}
      {...rest}
    />
  );
};

export default Button;
