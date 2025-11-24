import RevealOnScroll from "../helpers/RevealOnScroll";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                More Than Code—
                <br />
                We Are Your{" "}
                <span className="text-rose-600">Growth Engine.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  At DigitalHub, we believe that a website is more than just a
                  digital business card; it is the heartbeat of your brand’s
                  ecosystem.
                </p>
                <p>
                  What started as a passion for pixel-perfect design has evolved
                  into a full-service digital studio dedicated to one thing:
                  impact.
                </p>
                <p>
                  We operate at the intersection of aesthetic beauty and
                  technical performance. We don't just build sites; we build
                  infrastructure for your success.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Projects Shipped
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">200%</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Avg ROI Increase
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="delay-200">
            <div className="relative">
              {/* Abstract Architectural Graphic */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#111111] border border-white/10 relative group">
                <div className="absolute inset-0 bg-linear-to-tr from-rose-900/20 to-transparent"></div>
                {/* Code styling visualization */}
                <div className="p-8 font-mono text-sm text-gray-500 overflow-hidden opacity-40 select-none">
                  <div className="text-rose-500">const</div> DigitalHub = {"{"}{" "}
                  <br />
                  &nbsp;&nbsp;mission:{" "}
                  <span className="text-white">"Dominate Market"</span>,<br />
                  &nbsp;&nbsp;performance:{" "}
                  <span className="text-white">"100ms"</span>,<br />
                  &nbsp;&nbsp;design:{" "}
                  <span className="text-white">"Award Winning"</span>,<br />
                  &nbsp;&nbsp;render: () =&gt; {"{"} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return{" "}
                  <span className="text-rose-400">&lt;Impact /&gt;</span>;<br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"};
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-rose-600 rounded-full mix-blend-screen filter blur-[60px] opacity-30 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 bg-[#050505] p-4 rounded-xl border border-white/10 shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-sm">
                      System Operational
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
