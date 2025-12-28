import { auth, signOut } from "@/auth";

const Page = async () => {
  const session = await auth();
  return (
    <div className="text-white">
      {JSON.stringify(session?.user)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className="px-5 py-2 border rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
          type="submit"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Page;
