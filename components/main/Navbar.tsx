import Logo from "@/components/Logo";
import { ThemeToggle } from "@/components/theme-button";
import Button from "@/components/ui/Button";

const Navbar = () => {
  return (
    <nav className="w-full px-5 sm:px-20 py-5 bg-bg border-b-2 border-gray-300 dark:border-y-gray-700">
      <div className="flex justify-between items-center">
        <Logo className="cursor-pointer" />

        <ul className="flex gap-3 items-center">
          <li className="mr-0 md:mr-20">
            <ThemeToggle />
          </li>
          <Button
            className="hidden md:inline-block"
            href="/signup"
            variant="secondary"
            size="sm"
          >
            Sign Up
          </Button>
          <Button href="/login" variant="bordered" size="sm">
            Login
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
