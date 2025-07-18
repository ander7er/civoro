import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SignOut } from "@/components/auth/sign-out-button";

export default async function Home() {
  const session = await auth();
  
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-4">
      <h1 className="text-2xl font-bold">Welcome to Civoro, {session.user?.name}!</h1>
      <p className="text-muted-foreground">You are successfully logged in.</p>
      <SignOut />
    </div>
  )
}
