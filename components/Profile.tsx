import Image from "next/image";

const Profile = ({ img }: { img: string }) => {
  return (
    <span className="rounded-full flex justify-center items-center overflow-hidden">
      <Image
        src={img}
        alt="img-user"
        width={40}
        height={40}
      />
    </span>
  );
};

export default Profile;
