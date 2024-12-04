import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const $follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo($follower.current, "x", {
        duration: 0.6,
        ease: "power3",
      });

      const yTo = gsap.quickTo($follower.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

      const mouseMoveHandler = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener("mousemove", mouseMoveHandler);

      return () => {
        window.removeEventListener("mousemove", mouseMoveHandler);
      };
    });

    return () => {
      ctx.revert(); // Clean up when the component unmounts
    };
  }, []);

  return (
    <div
      ref={$follower}
      className="pointer-events-none fixed left-0 top-0 aspect-square w-[50vmin] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform"
      style={{
        filter: "blur(8px)", // Apply blur directly to the cursor
        transition: "filter 0.3s ease-in-out", // Smooth blur transition
      }}
    >
      <div className="h-full w-full animate-spin-slow bg-gradient-to-r from-cyan-700 to-amber-600"></div>
    </div>
  );
};

export default CustomCursor;
