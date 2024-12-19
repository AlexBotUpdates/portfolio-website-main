import { motion, useAnimate, useInView, stagger } from "framer-motion";
import { useEffect } from "react";
import { cn } from "../lib/utils";

const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  return (
    <div
      className={cn(
        "text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold",
        className
      )}
    >
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}`}
                className={cn(
                  "text-white opacity-0 hidden font-black",
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-12 md:h-16 lg:h-20 bg-[#465697]",
          cursorClassName
        )}
      />
    </div>
  );
};

const TextChange = () => {
  const words = [
    { text: "Hi, I'm Aryan", className: "text-white" },
    { text: "I'm Frontend Developer", className: "text-[#465697]" },
    { text: "I'm Designer", className: "text-white" },
  ];

  return <TypewriterEffect words={words} />;
};

export default TextChange;
