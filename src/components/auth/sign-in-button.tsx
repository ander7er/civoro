import { signIn } from "@/auth"
import { Button } from "../ui/button"
import { FcGoogle } from "react-icons/fc"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/" })
      }}
    >
      <Button type="submit" variant="outline" className="w-[300px]">
        <div className="flex items-center gap-x-2">
          <FcGoogle />
          <p>Continue with Google</p>
        </div>
      </Button>
    </form>
  )
} 