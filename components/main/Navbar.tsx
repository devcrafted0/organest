import Logo from "../Logo";
import { ThemeToggle } from "../theme-button";

const Navbar = () => {
  return (
    <nav className="w-full px-40 py-5 bg-bg border-b-2 border-gray-300 dark:border-y-gray-700">
      <div className="flex justify-between items-center">
        <Logo className="cursor-pointer" />

        <ul className="flex gap-3 items-center">
          <li className="mr-10">
            <ThemeToggle />
          </li>
          <li>Login</li>
          <li>Sign In</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
