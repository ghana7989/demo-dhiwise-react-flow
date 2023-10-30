import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-md",
} as const;
const variants = {
  gradient: {
    light_blue_400_indigo_A700: "bg-gradient  text-white-A700",
    yellow_600_red_500: "bg-gradient2  text-white-A700",
    pink_300_red_A700: "bg-gradient1  text-white-A700",
    blue_gray_700_gray_900: "bg-gradient3 ",
    pink_A400_deep_purple_500: "bg-gradient4  shadow-bs",
    blue_gray_800_01_gray_900_01: "bg-gradient5  text-white-A700",
  },
  fill: {
    gray_900_02: "bg-gray-900_02",
    gray_900_03: "bg-gray-900_03",
    pink_500: "bg-pink-500",
    blue_gray_50: "bg-gray-200 text-gray-800",
    white_A700: "bg-white-A700 shadow-bs",
    white_A700_26: "bg-white-A700_26",
    gray_50: "bg-gray-50 text-gray-800",
  },
  outline: {
    blue_gray_200: "border border-gray-500 border-solid",
    blue_gray_400: "border border-gray-600 border-solid text-gray-800",
    red_600: "border border-red-600 border-solid",
    green_400: "border border-green-500 border-solid",
  },
} as const;
const sizes = {
  xs: "p-1.5",
  sm: "p-[11px]",
  md: "p-5",
  lg: "p-[34px] sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
