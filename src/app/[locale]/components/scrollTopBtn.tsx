"use client"
import { useState, useEffect } from "react";

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#banner"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        fixed bottom-2 right-2
        w-11 h-11 lg:w-8 lg:h-8 p-2 lg:p-1
        rounded-[var(--border-radius-16)]
        bg-[var(--dark-blue-60)] text-[var(--light-blue)] border-2 border-[var(--light-blue)]
        flex items-center justify-center
        transition-all duration-300 transform
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        cursor-pointer z-50
      `}
    >
      {/* Default arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-6 h-6 lg:w-4 lg:h-4 absolute transition-opacity duration-300 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>

      {/* Hover arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-6 h-6 lg:w-4 lg:h-4 absolute transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </a>
  );
}
