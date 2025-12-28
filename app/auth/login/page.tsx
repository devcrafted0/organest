import { LoginForm } from "@/components/auth/login-form";
import BackToHome from "@/components/BackToHome";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-20 left-20">
        <BackToHome />
      </div>
      <LoginForm />
    </div>
  );
};

export default Page;
