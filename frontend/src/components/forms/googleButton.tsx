import {Button} from "@/components/ui/button.tsx";
import {  } from "lucide-react"


interface GoogleButtonProps {
  action: "Register" | "Login";
}

export default function GoogleButton( { action } : GoogleButtonProps){
    const handleGoogleRegister = () => {
        console.log("Google register");
    }


    return(
        <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py2"
            onClick={handleGoogleRegister}
        >
            <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 533.5 544.3"
            >
                <path fill="#4285F4" d="M533.5 278.4c0-17.7-1.5-34.9-4.3-51.4H272v97.2h146.9c-6.3 33.9-25.5 62.7-54.5 82l88.1 68c51.6-47.6 81-117.8 81-195.8z"/>
                <path fill="#34A853" d="M272 544.3c73.6 0 135.4-24.5 180.5-66.5l-88.1-68c-24.4 16.4-55.7 26-92.4 26-70.9 0-131-47.9-152.4-112.2l-90.2 69.5C66.2 474.8 162 544.3 272 544.3z"/>
                <path fill="#FBBC05" d="M119.6 332.6c-10.3-30.4-10.3-63.5 0-93.9l-90.2-69.5c-39.3 76.7-39.3 167.2 0 243.9l90.2-80.5z"/>
                <path fill="#EA4335" d="M272 107.7c38.6 0 73 13.3 100.3 39.5l75.1-75.1C401.6 24.2 339.8 0 272 0 162 0 66.2 69.5 29.2 172.2l90.2 69.5C141 155.6 201.1 107.7 272 107.7z"/>
            </svg>
            {action} with Google
        </Button>
    )
}