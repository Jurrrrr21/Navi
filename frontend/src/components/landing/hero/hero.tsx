import ImgsSlider from "./ImgsSlider";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/landingPageImgs/random.jpg";
import img2 from "../../../assets/landingPageImgs/random2.jpg";

const images = [img1, img2];

export default function Hero(){
    const navigate = useNavigate();
    return(
        <section id="/">
            <div className="landingContainer my-10 mx-30 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 p-6">
                <div className="md:w-1/2">
                    <ImgsSlider imgs={images}/>
                </div>
                <div className="mt-5 ml-5 w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
                    <h1 className="text-5xl font-bold text-foreground text-shadow-lg dark:text-shadow-[#040404]">
                        Your Life Admin <i className="text-primary">Simplified.</i>
                    </h1>
                    <p className="text-lg text-muted-foreground ml-10 mt-2 text-shadow-md dark:text-shadow-[#040404]">
                        Never miss a bill. Cancel unused subscriptions. Save time, money, and peace of mind.
                    </p>
                    <div className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-20 justify-center text-center">
                        <Button
                            variant="basic"
                            className="rounded-2xl mt-5 text-md px-12 bg-primary " 
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </Button>
                        <Button variant="outline" className="rounded-2xl mt-5 text-md px-10">Find Out More</Button>
                    </div>
                    
                </div>
            </div>
        </section>
        
    )
}