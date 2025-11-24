const Footer = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="space-y-4">
            <span className="text-2xl font-bold tracking-tighter text-white font-heading">
              Digital<span className="text-rose-600">Hub</span>
            </span>
            <p className="text-gray-400 mt-2">Your Vision, Engineered.</p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Approach
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#111111] border border-gray-800 rounded px-4 py-2 text-white text-sm focus:outline-none focus:border-rose-600"
              />
              <button className="w-full bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500">
          <p>&copy; 2024 DigitalHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
