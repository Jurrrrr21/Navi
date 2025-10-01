import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle.tsx";
import {Button} from "@/components/ui/button.tsx";
import NaviBot from "../NaviBot.tsx";

export default function Header() {
    const navigate = useNavigate();

    return(
        <header>
            <nav className="mx-auto flex items-center justify-between px-14 py-4">
                <div className="flex items-center space-x-8">
                    <div className="flex items-center gap-1">
                        <NaviBot/>
                        <span className="text-md font-semibold text-foreground">Navi</span>
                    </div>
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
                        onClick={ () => navigate("/login")}
                        className="hover:text-primary text-foreground"
                    >
                        Log In
                    </Button>
                    <Button 
                        variant="outline"
                        onClick={ () => navigate("/register")}
                        className="hover:text-primary text-foregrond"
                    >
                        Register
                    </Button>
                    <DarkModeToggle/>
                </div>
            </nav>
        </header>
    );
}
