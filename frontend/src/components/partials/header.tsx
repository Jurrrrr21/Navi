import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle.tsx";

export default function Header() {
    const navigate = useNavigate();

    return(
        <header>
            <nav className="container mx-auto flex items-center justify-between p-4">
                <h1 className="text-2xl font-bold text-foreground">
                    <a href="#home" onClick={() => navigate("/")}>Navi<span className="text-primary">.</span></a>
                </h1>
                <ul className="flex space-x-10 bg-card shadow-md px-4 py-1 rounded-md dark:shadow-[#040404]">
                    <li><a href="#home" className="text-foreground hover:text-primary p-[3px] text-[13px] transition-colors" onClick={() => navigate("/")}>Home</a></li>
                    <li><a href="#about" className="text-foreground hover:text-primary p-[3px] text-[13px] transition-colors">About Me</a></li>
                    <li><a href="#projects" className="text-foreground hover:text-primary p-[3px] text-[13px] transition-colors">Projects</a></li>
                    <li><a href="#contact" className="text-foreground hover:text-primary p-[3px] text-[13px] transition-colors">Contact Me</a></li>
                </ul>
                <DarkModeToggle/>
            </nav>
        </header>
    );
}
