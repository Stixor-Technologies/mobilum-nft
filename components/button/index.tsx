import React, { ButtonHTMLAttributes, FC } from "react";
import Spinner from "../spinner";

interface BaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: string;
  variant: "primary" | "secondary";
  loading?: boolean;
}

const Button: FC<BaseProps> = ({ variant, styles, ...props }) => {
  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-green text-light-green w-[7.6rem] h-[2.2rem] sm:w-[11.25rem] sm:h-[3.125rem]";
      case "secondary":
        return "bg-white text-black w-[140px] sm:w-[11.875rem] h-[2.5rem]";

      default:
        return "";
    }
  };

  const { children, loading, ...rest } = props;

  return (
    <button
      className={`button-clip flex items-center justify-center text-sm font-bold transition-all duration-300 hover:opacity-85 disabled:pointer-events-none disabled:opacity-80 sm:text-lg ${getVariant()} ${styles}`}
      {...rest}
    >
      <span>{loading ? <Spinner /> : <>{children}</>}</span>
    </button>
  );
};

export default Button;
