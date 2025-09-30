import { useState } from "react";
import GoogleButton from "./googleButton";
import PasswordInput from "./passwordInput";
import { Button } from "@/components/ui/button.tsx"
import { Input } from "@/components/ui/input.tsx"

export default function Login() {
    const [password, setPassword] = useState("");

    return(
        <div className="flex mt-10 items-center justify-center">
            <form className="p-6 w-full max-w-md space-y-4">
                <h2 className="text-xl font-bold text-foreground text-center mb-10">Navi<span className="text-primary">.</span></h2>
                <GoogleButton action="Login"/>

                <div className="flex items-center my-5">
                    <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                    <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">or</span>
                    <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                </div>

                <Input type="email" placeholder="Email" />
                <PasswordInput password={password} setPassword={setPassword} />
                <Button variant="basic" className="w-full">
                    Create Account
                </Button>
            </form>
        </div>
    );
}