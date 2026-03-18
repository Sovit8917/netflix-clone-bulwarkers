"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="relative flex items-center gap-2">
      

     
      <div className="relative flex items-center border border-gray-400/60 rounded pl-[10px] pr-[26px] py-[5px] gap-1">
        <select
          className="bg-transparent appearance-none focus:outline-none cursor-pointer font-semibold text-white text-[13px] sm:text-[14px]"
          value={theme.id}
          onChange={(e) => {
            const selected = themes.find((t) => t.id === e.target.value);
            if (selected) setTheme(selected);
          }}
        >
          {themes.map((t) => (
            <option key={t.id} value={t.id} className="text-black bg-white">
              {t.name}
            </option>
          ))}
        </select>

        <svg
          viewBox="0 0 16 16"
          width="14"
          height="14"
          fill="none"
          className="absolute right-1.5 pointer-events-none text-white"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}