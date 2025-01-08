"use client";

import { useState } from "react";

const insuranceFaq = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t mb-4">
      <button
        onClick={toggleCollapse}
        className="flex justify-between items-center w-full p-4 text-left  focus:outline-none"
      >
        <span className="font-bold">{title}</span>
        <span className="ml-2 text-lg">{isOpen ? "×" : "+"}</span>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default insuranceFaq;
