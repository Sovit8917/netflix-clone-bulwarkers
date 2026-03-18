"use client";

import { useTheme } from "@/context/ThemeContext";

function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center calc(0% - 24px)",
          transform: "scale(1)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent" />

      {/* Bottom gradient — pure black, no red/accent color */}
      <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Main content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 sm:px-10">
        <div className="flex flex-col items-center text-center w-full max-w-[680px]">

          <h1 className="text-[40px] sm:text-[52px] lg:text-[55px] font-black leading-[1.3] tracking-[-0.02em] mt-20 mb-3 text-white">
            Unlimited movies,<br /> shows, and more
          </h1>

          <p className="text-[14px] sm:text-[17px] lg:text-[19px] font-bold mr-[10px] mt-[2px] mb-2">
            Starts at ₹149. Cancel at any time.
          </p>

          <p className="text-[13px] sm:text-[15px] lg:text-[1rem] font-normal mt-[16px] lg:mt-[20px] mb-3 tracking-tighter">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 mt-1 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Email address"
              className="rounded h-[56px] w-full sm:w-[300px] lg:w-[370px] px-[18px] py-1 bg-black/30 text-white placeholder:text-gray-400 focus:outline-none transition-all duration-300"
              style={{ border: "1px solid rgba(156,163,175,0.6)" }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = theme.accent)
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(156,163,175,0.6)")
              }
            />

            <button
              className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-semibold px-8 py-3 rounded whitespace-nowrap transition-all duration-300"
              style={{
                backgroundColor: theme.accent,
                color: theme.btnText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accentHover;
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Get Started
              <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path d="M6 3l5 5-5 5V3z" />
              </svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HeroSection;