import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ElementType, ReactNode } from "react";

const ButtonStyles = cva(
  "flex group items-center gap-3 rounded-lg font-semibold",
  {
    variants: {
      variant: {
        primary: "",
        secondary:
          "bg-gray-300/50 dark:text-white hover:bg-gray-300 dark:bg-gray-800/80 dark:hover:bg-gray-800",
        bordered:
          "border-2 dark:text-white border-primary hover:bg-primary hover:text-white",
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
  }
);

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href: string;
  variant: "primary" | "secondary" | "bordered";
  size: "sm" | "md" | "lg";
  Icon?: ElementType | null;
  iconPosition?: "left" | "right";
}

const CustomButton = ({
  children,
  className,
  href,
  variant,
  size,
  Icon = null,
  iconPosition = "left",
}: ButtonProps) => {
  if (!href) {
    throw new Error("Provide the href to the button component");
  }

  return (
    <Link
      href={href}
      className={twMerge(className, ButtonStyles({ variant, size }))}
    >
      {Icon && iconPosition === "left" && (
        <span className="transform group-hover:-translate-x-1 transition-all duration-200">
          <Icon />
        </span>
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <span className="transform group-hover:translate-x-1 transition-all duration-200">
          <Icon />
        </span>
      )}
    </Link>
  );
};

export default CustomButton;
