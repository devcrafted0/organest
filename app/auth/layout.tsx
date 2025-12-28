import BackToHome from "@/components/BackToHome";
import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-20 left-20">
        <BackToHome />
      </div>
      <div className="transform scale-85 sm:scale-100">{children}</div>
    </div>
  );
};
