"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { contact } from "@/data/site";

export const Component = ({
  className,
  textState1 = "Chat on WhatsApp",
  textState2 = "Connect Now",
  message = "Hello Optika Healthcare, I would like to enquire about your corporate health camps and services.",
}: {
  className?: string;
  textState1?: string;
  textState2?: string;
  message?: string;
}) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
    const url = `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderChars = (text: string) => {
    return text.split("").map((ch, idx) => (
      <span
        key={idx}
        data-label={ch === " " ? "\u00A0" : ch}
        style={{ "--i": idx + 1 } as React.CSSProperties}
      >
        {ch === " " ? "\u00A0" : ch}
      </span>
    ));
  };

  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      <button
        className="button"
        type="button"
        onClick={handleClick}
        aria-label="Chat on WhatsApp with Optika Healthcare"
      >
        <div className="bg" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 342 208"
          height={208}
          width={342}
          className="splash"
        >
          <path
            strokeLinecap="round"
            strokeWidth={3}
            d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            strokeOpacity="0.3"
            d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            strokeOpacity="0.3"
            d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            strokeOpacity="0.3"
            d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            strokeOpacity="0.3"
            d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            strokeOpacity="0.3"
            d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272"
          />
          <path
            strokeLinecap="round"
            strokeWidth={3}
            strokeOpacity="0.3"
            d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449"
          />
        </svg>
        <div className="wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 221 42"
            height={42}
            width={221}
            className="path"
          >
            <path
              strokeLinecap="round"
              strokeWidth={3}
              d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
            />
          </svg>
          <div className="outline" />
          <div className="content">
            {/* WhatsApp SVG Icon */}
            <svg
              className="w-4 h-4 mr-1 text-emerald-400 fill-current flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.69 8.23-8.22 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.18-.48-.3z" />
            </svg>
            <span className="char state-1">
              {renderChars(textState1)}
            </span>
            <div className="icon">
              <div />
            </div>
            <span className="char state-2">
              {renderChars(textState2)}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Component;
