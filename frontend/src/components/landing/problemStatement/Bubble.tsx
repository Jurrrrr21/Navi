type Side = "left" | "right";

export default function Bubble({
  text,
  side = "left",
}: {
  text: string;
  side?: Side;
}) {
  const position = side === "left"
    ? "top-10 left-4 md:left-20"
    : "top-10 right-4 md:right-20";

  const tail = side === "left"
    ? "absolute -bottom-2 left-6 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-card"
    : "absolute -bottom-2 right-6 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-card";

  return (
    <div
      className={`absolute ${position} z-0 bg-card text-foreground p-4 rounded-2xl shadow-md max-w-[220px] text-center`}>
      <p className="text-sm font-medium text-primary">{text}</p>
      <div className={tail} />
    </div>
  );
}