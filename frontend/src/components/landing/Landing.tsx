import Hero from './hero/hero.tsx';
import AboutUs from './aboutUs/AboutUs.tsx';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Landing() {
    const location = useLocation();

    useEffect(() => {
        const section = document.getElementById(location.state?.scrollTo);
        if(section){
            section.scrollIntoView({ behavior : 'smooth', block : 'start'});
        }
    }, [location])

    return(
        <>
            <section id="/"><Hero/></section>
            <section id="about"><AboutUs/></section>
        </>
    )
}