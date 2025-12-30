"use client";
import Logo from "@/components/Logo";
import { ThemeToggle } from "@/components/theme-button";
import CustomButton from "@/components/ui/CustomButton";
import { useAuthUser } from "@/hooks/useAuthUser";
import Profile from "@/components/Profile";

const Navbar = () => {
  const user = useAuthUser();

  return (
    <nav className="w-full px-5 sm:px-20 py-5 bg-bg border-b-2 border-gray-300 dark:border-y-gray-700">
      <div className="flex justify-between items-center">
        <Logo className="cursor-pointer" />

        <ul className="flex gap-3 items-center">
          {user && (
            <li className="mr-0 md:mr-20">
              <ThemeToggle />
            </li>
          )}
          {!user && (
            <CustomButton
              className="hidden md:inline-block"
              href="/auth/register"
              variant="secondary"
              size="sm"
            >
              Sign Up
            </CustomButton>
          )}
          {!user && (
            <CustomButton href="/auth/login" variant="bordered" size="sm">
              Login
            </CustomButton>
          )}
          {user && <Profile img={user?.image!} />}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
