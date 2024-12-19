import { cn } from "../../lib/utils";
import React, { createContext, useContext, useRef, useState } from "react";

const MouseEnterContext = createContext(null);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={isMouseEntered}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full h-full [transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Component = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  ...rest
}) => {
  const isMouseEntered = useContext(MouseEnterContext);

  const transform = isMouseEntered
    ? `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`
    : "translate3d(0, 0, 0)";

  return (
    <Component
      className={cn("transition-all duration-200 ease-linear", className)}
      style={{
        transform,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
