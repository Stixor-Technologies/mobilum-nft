import React, { ButtonHTMLAttributes, FC } from "react";

interface BaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: string;
  variant: "primary" | "secondary";
}

const Button: FC<BaseProps> = ({ variant, styles, ...props }) => {
  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-green text-light-green w-[7.6rem] h-[2.2rem] sm:w-[11.25rem] sm:h-[3.125rem]";
      case "secondary":
        return "bg-white text-black sm:w-[11.875rem] h-[2.5rem]";

      default:
        return "";
    }
  };

  const { ...rest } = props;
  return (
    <button
      className={`button-clip flex w-full items-center justify-center text-sm font-bold sm:text-lg ${getVariant()} ${styles}`}
      {...rest}
    />
  );
};

export default Button;
