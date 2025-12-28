import BackToHome from "@/components/BackToHome";
import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-20 left-20">
        <BackToHome />
      </div>
      {children}
    </div>
  );
};
