import React, { FC } from "react";

interface SpinnerProps {
  color?: string;
  size?: string;
}

const Spinner: FC<SpinnerProps> = ({
  color = "text-indigo-blue",
  size = "size-6",
}) => {
  return (
    <div
      className="m-auto flex h-full w-full items-center justify-center text-center"
      role="status"
    >
      <svg
        className={`animate-spin ${size} ${color}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          stroke="currentColor"
          strokeWidth="4"
          cx="12"
          cy="12"
          r="10"
        ></circle>
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
