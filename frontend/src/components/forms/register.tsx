import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Check, X } from "lucide-react";
import GoogleButton  from "./googleButton.tsx"

export default function register(){
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const minLength = password.length >= 8;
   const hasNumber = /\d/.test(password);
   const hasUpper = /[A-Z]/.test(password);

     return(
        <div className="flex mt-10 items-center justify-center">
            <form action="" className="p-6 w-full max-w-md space-y-4">
               <GoogleButton/>
               <h2 className="text-xl font-bold text-foreground">Sign up for Navi</h2>
               <p className="text-sm text-foreground">Password must contain:</p>
               <ul className="w-full max-w-md mx-auto space-y-2">
                  <li 
                     className={`flex items-center gap-2 text-[12px] ${minLength ? "text-green-500" : "text-red-500"}`}
                  >
                     {minLength ? <Check className="w-4 h-4"/> : <X className="w-4 h-4"/>}
                     At least 8 characters
                  </li>
                  <li 
                     className={`flex items-center gap-2 text-[12px] ${hasNumber ? "text-green-500" : "text-red-500"}`}
                  >
                     {hasNumber ? <Check className="w-4 h-4"/> : <X className="w-4 h-4"/>}
                     Contains a number
                  </li>
                  <li 
                     className={`flex items-center gap-2 text-[12px] ${hasUpper ? "text-green-500" : "text-red-500"}`}
                  >
                     {hasUpper ? <Check className="w-4 h-4"/> : <X className="w-4 h-4"/>}
                     Contains an uppercase letter
                  </li>
               </ul>
               <Input type="email" placeholder="Email"/>
            <div className="relative w-full max-w-md mt-5">
                <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10" // space for the icon
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0 h-6 w-6"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                </Button>
                </div>
            </form>
        </div>
     );
}