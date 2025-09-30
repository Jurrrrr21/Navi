import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function Header() {
    const navigate = useNavigate();

    return(
        <header>
            <nav className="mx-auto flex items-center justify-between px-14 py-4">
                <div className="flex items-center space-x-8">
                    <h1 className="text-2xl font-bold text-foreground text-shadow-md">
                    <a href="/" onClick={() => navigate("/")}>Navi<span className="text-primary">.</span></a>
                    </h1>
                    <ul className="flex space-x-10 text-shadow-md px-4 py-1 rounded-md dark:text-shadow-[#040404]">
                        <li><a href="/" className="text-foreground hover:text-primary p-[3px] text-md transition-colors" onClick={() => navigate("/")}>Home</a></li>
                        <li><a href="#about" className="text-foreground hover:text-primary p-[3px] text-md transition-colors" onClick={() => navigate("/", {state: {scrollTo: "about"}})}>About Us</a></li>
                        <li><a href="#projects" className="text-foreground hover:text-primary p-[3px] text-md transition-colors">Prices</a></li>
                        <li><a href="#contact" className="text-foreground hover:text-primary p-[3px] text-md transition-colors">Contact/Support</a></li>
                    </ul>
                </div>
                <div className="flex items-center space-x-6">
                    <Button 
                        variant="no-hover"
                        onClick={ () => navigate("/register")}
                        className="hover:text-primary"
                    >
                        Register
                    </Button>
                    <Button 
                        variant="outline"
                        onClick={ () => navigate("/login")}
                        className="hover:text-primary"
                    >
                        Log In
                    </Button>
                    <DarkModeToggle/>
                </div>
            </nav>
        </header>
    );
}
