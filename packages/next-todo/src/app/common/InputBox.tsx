"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import {
  ChangeEvent,
  useState,
  InputHTMLAttributes,
  ReactNode,
  FC,
} from "react";

const InputVariant = cva(
  "bg-[#ffffff] border border-solid border-[#bfc6dd] rounded-[5px]"
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariant> {
  children?: ReactNode;
}

const InputBox: FC<InputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <input
      type="text"
      onChange={onChange}
      className={cn(InputVariant(), className)}
      {...props}
    />
  );
};

export default InputBox;
