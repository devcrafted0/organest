"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="p-5" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md border p-2 border-primary cursor-pointer dark:border-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-200"
    >
      {theme === "dark" ? <IoIosMoon /> : <IoIosSunny />}
    </button>
  );
}
