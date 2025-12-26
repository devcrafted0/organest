"use client";
import { cva } from "class-variance-authority";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const LogoStyles = cva("flex items-center", {
  variants: {
    variant: {
      primary: "gap-3",
      stacked: "flex-col gap-2 w-35",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface LogoProps {
  variant?: "primary" | "stacked";
  isLogoOnly?: boolean;
  dark?: boolean;
  className?: string;
}

const Logo = ({
  variant = "primary",
  isLogoOnly = false,
  dark = false,
  className,
}: LogoProps) => {
  const { theme } = useTheme();
  const LogoIcon = ({ className = "w-9 h-9", inverted = false }) => (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="48"
        height="48"
        rx="12"
        fill={inverted ? "white" : "#4f46e5"}
      />
      <path
        d="M24 12L32 18V30L24 36L16 30V18L24 12Z"
        fill={inverted ? "#4f46e5" : "white"}
        fillOpacity="0.9"
      />
      <path
        d="M24 20L28 22.5V27.5L24 30L20 27.5V22.5L24 20Z"
        fill={inverted ? "white" : "#4f46e5"}
      />
      <circle cx="24" cy="25" r="2" fill={inverted ? "#4f46e5" : "white"} />
    </svg>
  );

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="p-5" />;

  if (theme === "dark") {
    dark = true;
  }

  if (isLogoOnly) {
    return <LogoIcon inverted={dark} />;
  }

  return (
    <Link href="/" className={twMerge(className, LogoStyles({ variant }))}>
      <LogoIcon inverted={dark} />
      <span
        className={`text-2xl font-bold tracking-tight ${dark && "text-white"}`}
      >
        Organest
      </span>
    </Link>
  );
};

export default Logo;
