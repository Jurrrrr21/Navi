import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  password: string;
  setPassword: (val: string) => void;
}

export default function PasswordInput({ password, setPassword }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full max-w-md mt-5">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="pr-10"
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-0 h-6 w-6"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </Button>
    </div>
  );
}
