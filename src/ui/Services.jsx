import { ArrowRight, Code, Cpu, TrendingUp } from "lucide-react";
import RevealOnScroll from "../helpers/RevealOnScroll";

function Services() {
  const services = [
    {
      title: "High-End Design",
      desc: "We build bespoke digital experiences tailored to your unique business goals. Every pixel serves a purpose.",
      icon: <Code className="w-8 h-8 text-rose-500" />,
    },
    {
      title: "Technical Performance",
      desc: "We optimize for milliseconds, not just aesthetics. Speed is a feature. We ensure core web vitals are green.",
      icon: <Cpu className="w-8 h-8 text-rose-500" />,
    },
    {
      title: "Scalable Growth",
      desc: "Turning complex code into sustainable business revenue. Systems designed to grow as you do.",
      icon: <TrendingUp className="w-8 h-8 text-rose-500" />,
    },
  ];

  return (
    <section
      id="approach"
      className="py-24 bg-[#050505] relative border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              How We Help Businesses Grow
            </h2>
            <div className="w-24 h-1 bg-rose-600 rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} className={`delay-[${index * 100}ms]`}>
              <div className="group h-full bg-[#111111] p-8 rounded-2xl border border-white/5 transition-all duration-300 card-glow hover:-translate-y-2">
                <div className="mb-6 bg-rose-900/10 w-16 h-16 rounded-xl flex items-center justify-center border border-rose-900/20 group-hover:border-rose-600/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                <div className="mt-8 flex items-center text-rose-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
