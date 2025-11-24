import RevealOnScroll from "../helpers/RevealOnScroll";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "We needed a site that didn't just look good, but felt like us. DigitalHub took our vague ideas and translated them into a bold, striking interface.",
      author: "Sarah Jenkins",
      role: "Creative Director at Apex Studio",
    },
    {
      quote:
        "Our previous site was slow and clunky. DigitalHub didn't just redesign it; they re-engineered it. Our load times dropped by 60%.",
      author: "Marcus Thorne",
      role: "CTO of Velocity Tech",
    },
    {
      quote:
        "Since launching the new platform, our lead conversion rate has doubled. Highly recommended.",
      author: "David O.",
      role: "Founder of NextLevel Ventures",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-400">Don't just take our word for it.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={index} className={`delay-[${index * 100}ms]`}>
              <div className="bg-[#111111] p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-between hover:border-rose-500/30 transition-colors">
                <div className="mb-6">
                  <div className="flex space-x-1 mb-4 text-rose-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-gray-200 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="flex items-center mt-4 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-white">
                    {item.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">{item.author}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
