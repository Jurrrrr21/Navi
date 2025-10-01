import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const cssMap: Record<Size, string> = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
};

export default function NaviBot({
    size = "md",
    className,
}: {
    size?: Size;
    className?: string;
}) {
  return (
    <div className={cn("shrink-0 grid place-content-center", cssMap[size], className)}>
        <svg
            viewBox="0 0 64 64"
            className="w-full h-full"
            role="img"
            aria-label="Navi robot logo"
        >
        {/* antenna */}
            <line
                x1="32"
                y1="4"
                x2="32"
                y2="12"
                className="stroke-primary"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <circle cx="32" cy="4" r="3" className="fill-primary" />

            {/* head */}
            <rect
                x="8"
                y="12"
                width="48"
                height="40"
                rx="14"
                ry="14"
                className="fill-card stroke-border"
                strokeWidth="2"
            />

            {/* blush cheeks (hidden in dark) */}
            <circle cx="14" cy="30" r="3" className="fill-primary/20 dark:fill-transparent" />
            <circle cx="50" cy="30" r="3" className="fill-primary/20 dark:fill-transparent" />

            {/* big round eyes */}
            <circle cx="22" cy="24" r="4" className="fill-primary" />
            <circle cx="42" cy="24" r="4" className="fill-primary" />

            {/* cute smile */}
            <path
                d="M 20 36 Q 32 44 44 36"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                className="text-primary"
            />
        </svg>
    </div>
  );
}