
import GlobalStyles from "./styles/GlobalStyles";
import Services from "./ui/Services";
import Testimonials from "./ui/Testimonials";
import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import About from "./ui/About";
import Blog from "./ui/Blog";
import Contact from "./ui/Contact";

export default function App() {
  return (
    <div className="antialiased selection:bg-rose-500 selection:text-white">
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
