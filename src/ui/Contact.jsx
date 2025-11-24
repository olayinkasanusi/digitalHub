import { Github, Linkedin, Mail, X } from "lucide-react";
import RevealOnScroll from "../helpers/RevealOnScroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5"
    >
      {/* Background accent */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-linear-to-l from-rose-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Talk
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Ready to transform your digital presence? Tell us about your
                project and we'll schedule a discovery call.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12 bg-[#111111] rounded-lg flex items-center justify-center text-rose-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  {/* FIX: Replaced <p> with <a> and made it a functional mailto link */}
                  <div className="ml-4">
                    <h4 className="text-white font-bold text-lg">Email Us</h4>
                    <a
                      href="mailto:sanusiou.dev@gmail.com"
                      className="text-gray-400 hover:text-rose-500 transition-colors"
                    >
                      sanusiou.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-gray-400 hover:bg-rose-600 hover:text-white transition-all"
                    >
                      <X className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-gray-400 hover:bg-rose-600 hover:text-white transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-gray-400 hover:bg-rose-600 hover:text-white transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="delay-200">
            <form className="bg-[#111111] p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors"
                    placeholder="John "
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Budget
                  </label>
                  <select
                    id="budget"
                    className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors appearance-none"
                  >
                    <option>Select a range</option>
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
