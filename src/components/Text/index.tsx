import React from "react";

const sizeClasses = {
  txtHelveticaBold32: "font-bold font-helvetica",
  txtHelveticaBold10Red600: "font-bold font-helvetica",
  txtHelveticaBold16Bluegray100: "font-bold font-helvetica",
  txtHelveticaBold16WhiteA700: "font-bold font-helvetica",
  txtRobotoMedium12WhiteA700: "font-medium font-roboto",
  txtHelveticaBold12Bluegray400: "font-bold font-helvetica",
  txtHelvetica12WhiteA700: "font-helvetica font-normal",
  txtHelvetica22: "font-helvetica font-normal",
  txtHelvetica24: "font-helvetica font-normal",
  txtRobotoMedium16Bluegray900: "font-medium font-roboto",
  txtHelvetica16Black900: "font-helvetica font-normal",
  txtHelveticaBold44: "font-bold font-helvetica",
  txtHelveticaBold14Bluegray400: "font-bold font-helvetica",
  txtHelveticaBold14Bluegray200: "font-bold font-helvetica",
  txtHelveticaBold10Bluegray100: "font-bold font-helvetica",
  txtHelveticaBold12WhiteA700: "font-bold font-helvetica",
  txtHelveticaBold46: "font-bold font-helvetica",
  txtHelveticaBold10Bluegray900: "font-bold font-helvetica",
  txtHelveticaBold14Green400: "font-bold font-helvetica",
  txtRobotoMedium12: "font-medium font-roboto",
  txtHelvetica12Bluegray400: "font-helvetica font-normal",
  txtHelveticaBold10Purple500: "font-bold font-helvetica",
  txtHelveticaBold18WhiteA700: "font-bold font-helvetica",
  txtRobotoMedium16: "font-medium font-roboto",
  txtHelveticaBold10: "font-bold font-helvetica",
  txtHelveticaBold10Cyan300: "font-bold font-helvetica",
  txtHelveticaBold12: "font-bold font-helvetica",
  txtHelveticaBold10Green400: "font-bold font-helvetica",
  txtHelveticaBold18: "font-bold font-helvetica",
  txtHelvetica14WhiteA700: "font-helvetica font-normal",
  txtHelveticaBold14: "font-bold font-helvetica",
  txtHelveticaBold16: "font-bold font-helvetica",
  txtHelveticaBold14WhiteA700: "font-bold font-helvetica",
  txtHelveticaBold12Bluegray900: "font-bold font-helvetica",
  txtHelveticaBold12Bluegray700: "font-bold font-helvetica",
  txtHelveticaBold16Black900: "font-bold font-helvetica",
  txtHelvetica14Bluegray400: "font-helvetica font-normal",
  txtHelveticaBold14Bluegray100: "font-bold font-helvetica",
  txtHelveticaBold20: "font-bold font-helvetica",
  txtHelveticaBold32WhiteA700: "font-bold font-helvetica",
  txtHelveticaBold14Red600: "font-bold font-helvetica",
  txtHelveticaBold24: "font-bold font-helvetica",
  txtHelvetica10WhiteA700: "font-helvetica font-normal",
  txtHelvetica12Bluegray900: "font-helvetica font-normal",
  txtHelveticaBold10Bluegray200: "font-bold font-helvetica",
  txtHelvetica14: "font-helvetica font-normal",
  txtDMSansRegular12: "font-dmsans font-normal",
  txtHelveticaBold24Bluegray900: "font-bold font-helvetica",
  txtHelvetica16: "font-helvetica font-normal",
  txtHelveticaBold18Bluegray400: "font-bold font-helvetica",
  txtHelvetica10: "font-helvetica font-normal",
  txtHelvetica12: "font-helvetica font-normal",
  txtHelvetica16WhiteA700: "font-helvetica font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
