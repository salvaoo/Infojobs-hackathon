import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function AuthStatus() {
  const session = await getServerSession(authOptions);
  return (
    <div className="relative bg-black text-white w-full flex justify-center items-center">
      {session && (
        <p className="text-stone-200 text-sm">
          Signed in as {session.user?.email}
        </p>
      )}
    </div>
  );
}