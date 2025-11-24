import { ArrowRight, ChevronRight } from "lucide-react";
import RevealOnScroll from "../helpers/RevealOnScroll";

const Blog = () => {
  const articles = [
    {
      title: "Why Speed Matters",
      category: "Performance",
      date: "Oct 12, 2024",
      excerpt:
        "Google's Core Web Vitals are changing the game. Is your site keeping up?",
      img: "https://plus.unsplash.com/premium_photo-1684923604128-c48f46b0cb00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyZm9ybWFuY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "The Psychology of Color",
      category: "Design",
      date: "Oct 28, 2024",
      excerpt:
        "How selecting the right palette can increase user trust and conversion rates.",
      img: "https://media.istockphoto.com/id/1317785463/photo/model-of-a-brain-made-from-many-multi-coloured-metallic-sliced-layers-stacked-on-top-of-each.webp?a=1&b=1&s=612x612&w=0&k=20&c=LIO1aDjTu6GrndjJSOtDD0r6chG_2-YN2mn0Pm3U-K0=",
    },
    {
      title: "Scaling React Apps",
      category: "Engineering",
      date: "Nov 05, 2024",
      excerpt:
        "Architecture decisions that save you technical debt down the road.",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NhbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Latest Insights
              </h2>
              <div className="w-16 h-1 bg-rose-600 rounded-full"></div>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center text-rose-500 hover:text-white transition-colors mt-4 md:mt-0"
            >
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((post, index) => (
            <RevealOnScroll key={index} className={`delay-[${index * 100}ms]`}>
              <article className="group cursor-pointer">
                <div className="h-48 bg-[#1a1a1a] rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
                  <img
                    className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"
                    src={post.img}
                  />
                  <span className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm font-semibold text-white group-hover:translate-x-2 transition-transform">
                  Read More{" "}
                  <ChevronRight className="w-4 h-4 ml-1 text-rose-500" />
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center text-rose-500 font-medium"
          >
            View all articles <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
