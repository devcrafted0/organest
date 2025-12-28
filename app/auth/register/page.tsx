import { RegisterForm } from "@/components/auth/register-form";
import BackToHome from "@/components/BackToHome";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="absolute top-20 left-20">
        <BackToHome />
      </div>
      <div className="scale-85 sm:scale-100 transform">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Page;
