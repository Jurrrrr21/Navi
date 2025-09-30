import { useState } from "react";
import { Input } from "@/components/ui/input";
import GoogleButton from "./googleButton.tsx";
import PasswordRequirements from "./passwordRequirements.tsx";
import PasswordInput from "./passwordInput.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function Register() {
  const [password, setPassword] = useState("");

  return (
    <div className="flex mt-10 items-center justify-center">
      <form className="p-6 w-full max-w-md space-y-4">
         <h2 className="text-xl font-bold text-foreground mb-10">Sign up for Navi<span className="text-primary">.</span></h2>
         <GoogleButton action="Register"/>

         <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
         </div>

         <p className="text-sm text-foreground">Password must contain:</p>

         <PasswordRequirements password={password} />

         <Input type="email" placeholder="Email" />
         <PasswordInput password={password} setPassword={setPassword} />
         <Button variant="basic" className="w-full">
            Create Account
         </Button>
      </form>
    </div>
  );
}
