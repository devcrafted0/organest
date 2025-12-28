import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Logo from "../Logo";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const Header = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Logo />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
