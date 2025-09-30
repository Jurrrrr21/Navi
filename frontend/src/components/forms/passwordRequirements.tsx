import { Check, X } from "lucide-react";

interface PasswordRequirementsProps {
  password: string;
}

export default function PasswordRequirements({ password }: PasswordRequirementsProps) {
  const minLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpper = /[A-Z]/.test(password);

  const requirements = [
    { valid: minLength, text: "At least 8 characters" },
    { valid: hasNumber, text: "Contains a number" },
    { valid: hasUpper, text: "Contains an uppercase letter" },
  ];

  return (
    <ul className="w-full max-w-md mx-auto space-y-1">
        {requirements.map((req, i) => (
            <li
            key={i}
            className={`flex items-center gap-2 text-[12px] ${
                req.valid ? "text-green-500" : "text-red-500"
            }`}
            >
            {req.valid ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            {req.text}
            </li>
        ))}
    </ul>
  );
}
