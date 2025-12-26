import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ReactNode } from "react";

const ButtonStyles = cva("rounded-lg font-semibold", {
  variants: {
    variant: {
      primary: "",
      secondary: "bg-gray-300/50 hover:bg-gray-300 dark:bg-gray-800/80 dark:hover:bg-gray-800",
      bordered: "border-2 border-primary hover:bg-primary hover:text-white",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href: string;
  variant: "primary" | "secondary" | "bordered";
  size: "sm" | "md" | "lg";
}

const Button = ({ children, className, href, variant, size }: ButtonProps) => {
  if (!href) {
    throw new Error("Provide the href to the button component");
  }

  return (
    <Link
      href={href}
      className={twMerge(className, ButtonStyles({ variant, size }))}
    >
      {children}
    </Link>
  );
};

export default Button;
