import RevealOnScroll from "../helpers/RevealOnScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden" // Added pb-32 here
    >
      {/* Background Ambience: Linear Black to Red Gradient */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Main Linear Gradient: Black to Deep Rose (using Tailwind classes for linear gradient) */}
        <div className="absolute inset-0 bg-linear-to-br from-[#050505] via-[#050505]/90 to-rose-900/50"></div>

        {/* Grid Overlay (Kept for subtle texture) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-rose-900/50 bg-rose-900/10 backdrop-blur-sm">
            <span className="text-rose-500 text-xs font-bold tracking-widest uppercase">
              Digital Excellence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Bold Design. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-400 to-gray-600">
              Precision Engineering.
            </span>{" "}
            <br />
            Limitless Scale.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            DigitalHub transforms your business vision into a high-performance
            web reality. We operate at the intersection of aesthetic beauty and
            technical performance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-md font-semibold text-lg transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)]"
            >
              Book Consultation
            </a>
            <a
              href="#approach"
              className="w-full sm:w-auto px-8 py-4 border border-gray-700 hover:border-white text-gray-300 hover:text-white rounded-md font-semibold text-lg transition-all"
            >
              View Our Work
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
