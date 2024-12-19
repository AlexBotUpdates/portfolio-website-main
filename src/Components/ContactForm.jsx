import React from "react";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import Loader from './ui/Loader';

export function ContactForm({ isVisible, onClose }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted");
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-input bg-[#171d32] border border-[#465697]/20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl text-white">Contact Me</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            ✕
          </button>
        </div>

        <form className="my-4" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label>Name</Label>
            <Input placeholder="Your name" type="text" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label>Email Address</Label>
            <Input placeholder="your.email@example.com" type="email" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label>Message</Label>
            <textarea 
              className="w-full rounded-md border border-[#465697] bg-[#171d32] px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#465697]"
              placeholder="Your message..."
              rows={4}
            />
          </LabelInputContainer>

          <button
            className="w-full text-white py-2 px-6 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] relative"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

const Label = ({ children }) => {
  return (
    <label className="text-white text-sm font-medium mb-1 block">
      {children}
    </label>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
