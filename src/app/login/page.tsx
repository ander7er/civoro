import SignInButton from "@/components/auth/sign-in-button";
import Image from "next/image";
import logo from "../../../public/civoro-white.png"

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-between h-screen py-8">
            <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-y-4">
                    <Image src={logo} alt="Civoro Logo" width={130} height={130} />
                    <SignInButton />
                    <p className="text-xs text-muted-foreground">Civoro is invite-only. If you have a valid invite, please sign in.</p>
                </div>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
                <p className="text-xs text-muted-foreground">By continuing, you agree to Civoro's <span className="hover:underline hover:cursor-pointer">Terms of Service</span> and <span className="hover:underline hover:cursor-pointer">Privacy Policy</span>.</p>
            </div>
        </div>
    )
}
