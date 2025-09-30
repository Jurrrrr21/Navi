import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

interface ImgsSliderProps {
  imgs: string[];
}

export default function ImgsSlider({ imgs }: ImgsSliderProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));

  // ✅ Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // cleanup on unmount
  }, [imgs.length]);

  // ✅ Swipe support
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="imgsContainer group relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg dark:shadow-[#040404]"
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-[300px] flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Arrows (hidden by default, shown on hover) */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/10 text-white px-3 py-1 rounded-full hidden group-hover:flex"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/10 text-white px-3 py-1 rounded-full hidden group-hover:flex"
      >
        ▶
      </button>
    </div>
  );
}
