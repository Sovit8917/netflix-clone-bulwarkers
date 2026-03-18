"use client";

import { useTheme } from "@/context/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";

function Navbar() {
  const { theme } = useTheme();

  return (
    <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-10 lg:px-[148px] py-[24px] bg-gradient-to-b from-black/100 to-black/0">

      <svg
        viewBox="0 0 111 30"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Netflix"
        role="img"
        className="h-[28px] sm:h-[36px] lg:h-[40px] w-auto transition-colors duration-300"
        fill={theme.logo}
      >
        <g>
          <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" />
        </g>
      </svg>

      {/* Right Side */}
      <div className="flex items-center pr-[4px] gap-2 sm:gap-3">

        {/* Theme Switcher */}
        <ThemeSwitcher />

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

        {/* Sign In Button — themed */}
        <button
          className="text-sm font-semibold px-[12px] sm:px-[15px] py-[6px] rounded transition-all duration-300"
          style={{
            backgroundColor: theme.accent,
            color: theme.btnText,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor = theme.accentHover)
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor = theme.accent)
          }
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;