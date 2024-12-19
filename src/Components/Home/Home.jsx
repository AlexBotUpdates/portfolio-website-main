import React, { useState } from "react";
import TextChange from "../TextChange";
import { ContactForm } from "../ContactForm";

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="text-white flex w-full justify-center items-center min-h-screen p-10 md:p-20">
      <div className="text-center">
        <h1 className="font-bold">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          "A passionate developer and designer crafting engaging user experiences with React, Tailwind, and modern design tools."
        </p>
        <button 
          onClick={() => setShowContactForm(true)}
          className="flex justify-center gap-2 items-center mx-auto mt-8 shadow-xl text-lg bg-[#465697] backdrop-blur-md lg:font-semibold isolation-auto text-white border-[#465697] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-[#465697] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-2 overflow-hidden border-2 rounded-full group"
        >
          Contact Me
          <svg 
            className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-[#465697] text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-1 rotate-45" 
            viewBox="0 0 16 19" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" 
              className="fill-white group-hover:fill-[#465697]" 
            />
          </svg>
        </button>
      </div>

      <ContactForm 
        isVisible={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </div>
  );
};

export default Home;
