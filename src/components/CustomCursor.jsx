import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Kursor koordinatalari
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  // Tashqi aylana (dot follower)
  const dotX = useSpring(0, { stiffness: 250, damping: 20 });
  const dotY = useSpring(0, { stiffness: 250, damping: 20 });

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      
      if (isHidden) setIsHidden(false);

      // Link yoki tugma ustida ekanligini tekshirish
      const target = e.target;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a");
      
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, dotX, dotY, isHidden]);

  return (
    <>
      {/* Asosiy kichik nuqta */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHidden ? 0 : 1,
        }}
      />

      {/* Tashqi ergashuvchi aylana */}
      <motion.div
        className="fixed top-0 left-0 border border-primary rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          width: isPointer ? 60 : 35,
          height: isPointer ? 60 : 35,
          backgroundColor: isPointer ? "rgba(2, 132, 199, 0.1)" : "rgba(2, 132, 199, 0)",
          borderWidth: isPointer ? "0px" : "1.5px",
        }}
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHidden ? 0 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
