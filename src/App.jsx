import LiquidEther from "./components/Backgrounds/LiquidEther/LiquidEther";
import RotatingText from "./components/TextAnimations/RotatingText/RotatingText.jsx";

function App() {
  const rotatingItems = ["remove noise", "widen content", "read better", "tame layout", "with AI"];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      <div className="absolute inset-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 container max-w-3xl mx-auto font-mono">
        <div className="w-full">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight flex flex-col sm:flex-row items-center gap-x-0 sm:gap-x-5 gap-y-2 sm:gap-y-0">
            <span>Refine to </span>
            <RotatingText
              texts={rotatingItems}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white">
            WebRefine helps you reshape and restyle the web, clean, calm, and truly yours.
          </p>
        </div>
      </main>

      <footer className="relative z-10 text-center pb-6 text-xs text-white/40">
        © 2025 WebRefine. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
