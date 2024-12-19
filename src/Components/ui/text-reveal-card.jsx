import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-transparent rounded-lg relative overflow-hidden",
        className
      )}
    >
      {children}
      <div className="relative flex items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute bg-transparent z-20 will-change-transform"
        >
          <p className="text-xl md:text-2xl font-semibold leading-normal text-white">
            {revealText}
          </p>
        </motion.div>

        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-full w-[8px] bg-gradient-to-b from-transparent via-white to-transparent absolute z-50 will-change-transform"
        />

        <div className="overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xl md:text-2xl font-semibold leading-normal text-white">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
