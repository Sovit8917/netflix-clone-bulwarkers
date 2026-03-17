import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-10 lg:px-[148px] py-[24px] bg-gradient-to-b from-black/100 to-black/0">
      {/* Netflix Logo */}
      <Image
        src="/netflix-logo.svg"
        alt="Netflix"
        width={148}
        height={40}
        className="h-[28px] sm:h-[36px] lg:h-[40px] w-auto"
        priority
      />

      {/* Right Side */}
      <div className="flex items-center pr-[4px] gap-2 sm:gap-3">
        {/* Language Selector */}
        <div className="relative flex items-center border border-gray-400/60 rounded pl-[8px] sm:pl-[11px] pr-[18px] sm:pr-[19px] pt-[5px] pb-[2.5px] text-white text-sm cursor-pointer gap-[6px]">
          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="shrink-0 text-white mb-[3px]"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"
              clipRule="evenodd"
            />
          </svg>

          <select
            className="bg-transparent appearance-none focus:outline-none cursor-pointer font-semibold text-white text-[13px] sm:text-[15px] pr-3 sm:pr-4 pb-[1px]"
            defaultValue="en"
          >
            <option value="en" className="text-black">English</option>
            <option value="hi" className="text-black">हिन्दी</option>
          </select>

          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="absolute right-2 mr-[4px] mt-[2px] mb-[3px] pointer-events-none text-white shrink-0"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Sign In Button */}
        <button className="bg-[#f51823] text-[#fff] text-sm font-semibold px-[12px] sm:px-[15px] py-[6px] rounded hover:bg-[#c11119] transition">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;