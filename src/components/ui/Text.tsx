import React, { forwardRef } from "react";

import { cn } from "@/libs/utils/twMerge";

type ComponentAs = "h1" | "h2";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onClick?: any;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(" text-[52px] font-bold leading-[96px]", className)}
          onClick={onClick}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn("text-[28px] font-semibold leading-[36px]", className)}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(" text-[16px] font-normal leading-6", className)}
        onClick={onClick}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
