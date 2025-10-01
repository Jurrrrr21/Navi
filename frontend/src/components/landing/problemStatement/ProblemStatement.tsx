import { CheckCircle2 } from "lucide-react";
import Bubble from "./Bubble.tsx";
import NaviBot from '../../NaviBot.tsx';

export default function AboutUs() {
  /* 3 short facts you want to show */
  const facts = [
    "The average person wastes $500+ a year on forgotten subscriptions.",
    "Late–fee charges add up to $15 bn annually in the US alone.",
  ];

  return (
    <section id="about" className="bg-muted py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div className="animate-float">
                <Bubble side="left" text={facts[0]}/>
            </div>
            <div className="animate-float animation-delay-2100">
                <NaviBot className="absolute top-36 left-24"/>
            </div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl space-y-12 relative z-10">
            <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Overwhelmed by Bills and Subscriptions?
                </h1>
            </div>

        <ul className="flex flex-col md:flex-row md:justify-center md:gap-8 space-y-4 md:space-y-0 text-center">
            <li className="flex gap-1 text-foreground justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                Still paying for services you don’t use?
            </li>
            <li className="flex gap-1 text-foreground justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                Lost track of your monthly bills?
            </li>
            <li className="flex gap-1 text-foreground justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                Dreading another late payment fee?
            </li>
        </ul>

        <div className="text-center space-y-3">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
                It’s time to simplify life admin — <span className="text-primary">without the stress.</span>
            </p>
        </div>
      </div>
    </section>
  );
}