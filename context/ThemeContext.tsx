"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Theme = {
  id: string;
  name: string;
  accent: string;
  accentHover: string;
  logo: string;
  btnText: string;
};

export const THEMES: Theme[] = [
  {
    id: "netflix-red",
    name: "Netflix Red",
    accent: "#E50914",
    accentHover: "#c11119",
    logo: "#E50914",
    btnText: "#ffffff",
  },
  {
    id: "gold-prestige",
    name: "Gold",
    accent: "#C9A84C",
    accentHover: "#a8893c",
    logo: "#C9A84C",
    btnText: "#111111",
  },
  {
    id: "ocean-blue",
    name: "Ocean",
    accent: "#1A78C2",
    accentHover: "#155fa0",
    logo: "#4DA8FF",
    btnText: "#ffffff",
  },
  {
    id: "emerald",
    name: "Emerald",
    accent: "#1D9E75",
    accentHover: "#158060",
    logo: "#2CC990",
    btnText: "#ffffff",
  },
  {
    id: "purple-galaxy",
    name: "Galaxy",
    accent: "#7B2FBE",
    accentHover: "#621ea0",
    logo: "#A855F7",
    btnText: "#ffffff",
  },
  {
    id: "coral-sunset",
    name: "Coral",
    accent: "#D85A30",
    accentHover: "#b84a24",
    logo: "#FF7A4D",
    btnText: "#ffffff",
  },
  {
    id: "rose-pink",
    name: "Rose",
    accent: "#C2185B",
    accentHover: "#9a1248",
    logo: "#F06292",
    btnText: "#ffffff",
  },
  {
    id: "silver-ice",
    name: "Ice",
    accent: "#546E7A",
    accentHover: "#445a64",
    logo: "#90A4AE",
    btnText: "#ffffff",
  },

  {
    id: "midnight-black",
    name: "Midnight",
    accent: "#1a1a2e",
    accentHover: "#16213e",
    logo: "#e0e0e0",
    btnText: "#ffffff",
  },
  {
    id: "cyber-yellow",
    name: "Cyber",
    accent: "#FFD600",
    accentHover: "#f0c800",
    logo: "#FFD600",
    btnText: "#111111",
  },
  {
    id: "neon-green",
    name: "Neon",
    accent: "#00C853",
    accentHover: "#00a846",
    logo: "#00E676",
    btnText: "#ffffff",
  },
  {
    id: "lavender-dream",
    name: "Lavender",
    accent: "#7C4DFF",
    accentHover: "#6535f5",
    logo: "#B388FF",
    btnText: "#ffffff",
  },
  {
    id: "burnt-orange",
    name: "Ember",
    accent: "#BF360C",
    accentHover: "#a02d09",
    logo: "#FF6E40",
    btnText: "#ffffff",
  },
  {
    id: "deep-teal",
    name: "Teal",
    accent: "#00695C",
    accentHover: "#00564c",
    logo: "#1DE9B6",
    btnText: "#ffffff",
  },
  {
    id: "royal-blue",
    name: "Royal",
    accent: "#1565C0",
    accentHover: "#0d50a0",
    logo: "#82B1FF",
    btnText: "#ffffff",
  },
  {
    id: "hot-magenta",
    name: "Magenta",
    accent: "#AD1457",
    accentHover: "#8e1047",
    logo: "#FF4081",
    btnText: "#ffffff",
  },
];

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(THEMES[0]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}



export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx; 
}