import CustomButton from "@/components/ui/CustomButton";
import { IoArrowBack } from "react-icons/io5";

const BackToHome = () => {
  return (
    <CustomButton Icon={IoArrowBack} variant="secondary" size="lg" href="/">
      Back To Home
    </CustomButton>
  );
};

export default BackToHome;
