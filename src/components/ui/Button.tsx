import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils/twMerge";
import Spinner from "./Spinner";

const button = cva(
  [
    "px-8",
    "py-4",
    "rounded-[8px]",
    "font-semibold",
    "text-[14px]",
    "leading-6",
    "font-sora",
    "flex",
    "justify-center",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-red",
          "text-white",
          "hover:bg-[#0052BF]",
          "transition-all",
          "duration-300",
        ],
        icon: ["py-5", "px-3", "bg-accent", "text-white"],
        gray: [
          "bg-red",
          "text-[#FCFCFC]",
          "border",
          "border-[#878787]",
          "text-[16px]",
          "font-semibold",
          "items-center",
        ],
        white: ["bg-[#BCBBBB]", "text-[#0B0B0B]"],
        // "primary-orange": ["bg-orange", "text-white"],
        // secondary: ["bg-[#F4EFE1]", "text-green-dark"],
        // gold: ["gold-button"],
        // "primary-outlined": [
        //   "border",
        //   "border-green-light",
        //   "bg-green-dark",
        //   "text-green-light",
        // ],
      },
      size: {
        small: ["py-5", "px-3"],
        medium: [""],
      },
    },
    compoundVariants: [
      { variant: "primary", size: "medium", class: "capitalize" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  isLoading,
  children,
  ...props
}) => (
  <button
    disabled={isLoading}
    className={cn(button({ variant, size, className }))}
    {...props}
  >
    {isLoading ? <Spinner /> : children}
    {/* {isLoading ? "Loading..." : children} */}
  </button>
);

export default Button;
