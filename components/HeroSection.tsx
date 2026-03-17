import React from "react";

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg')",
        }}
      />
{/* dark */}
      <div className="absolute inset-0 bg-black/50" />
{/* Top dark */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent" />

      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 sm:px-10">
        <div className="flex flex-col items-center text-center w-full max-w-[680px]">

          <h1 className="text-[40px] sm:text-[52px] lg:text-[55px] font-black leading-[1.1] tracking-[-0.02em] mt-20 mb-4 text-white">
  Unlimited movies,<br /> shows, and more
</h1>

          <p className="text-[14px] sm:text-[17px] lg:text-[20px] font-bold mr-[10px] mt-[2px] mb-2">
            Starts at ₹149. Cancel at any time.
          </p>

          <p className="text-[13px] sm:text-[15px] lg:text-[1rem] font-normal mt-[16px] lg:mt-[22px] mb-3 tracking-wide">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 mt-1 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Email address"
              className="rounded border border-gray-400 h-[56px] w-full sm:w-[300px] lg:w-[370px] px-[18px] py-1 bg-black/30 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <button className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-semibold bg-[#e50914] text-white px-8 py-3 rounded hover:bg-[#f40612] whitespace-nowrap">
              Get Started
              <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path d="M6 3l5 5-5 5V3z"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HeroSection;