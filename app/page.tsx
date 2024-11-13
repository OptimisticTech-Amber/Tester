import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default async function Home() {
  const { userId } = await auth();
  console.log(userId);

  if (!userId) redirect("/");

  return (
    <div className=" min-h-screen w-full bg-black   text-white ">
      <Sidebar />
      <div className="flex items-center justify-center flex-col mt-12 gap-4">
        <h1 className="font-extrabold text-2xl ">Welcome to Tester </h1>
        <div className="flex justify-center items-center">
          <div>Thanks for visting our website = {userId} </div>
        </div>
      </div>
    </div>
  );
}
