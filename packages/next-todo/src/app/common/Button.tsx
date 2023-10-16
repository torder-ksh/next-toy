"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC, ReactNode, useMemo } from "react";
import { cva, VariantProps } from "class-variance-authority";

export const ButtonVariants = cva(
  `flex justify-center items-center rounded-md w-[75px] h-[40px] border-solid border px-3`,
  {
    variants: {
      theme: {
        white: "bg-[#ffffff] border-black",
        black: "bg-[#000000] border-black text-[#ffffff]",
        blue: "bg-[#403cff] border-[#403cff] text-[#ffffff]",
      },
      size: {
        default: "",
        md: " w-[2rem] h-[2.375rem] text-[1rem]",
        lg: "w-[21.875rem] h-[7.5rem] text-[3rem]",
        wlg: "w-[24rem] h-[5.25rem] text-[2rem] rounded-3xl",
      },
    },
    defaultVariants: {
      theme: "blue",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  theme,
  size,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(ButtonVariants({ theme, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
