function GlobalStyles() {
  return (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');

    :root {
      --color-bg: #050505;
      --color-surface: #111111;
      --color-accent: #E11D48;
    }

    body {
      background-color: var(--color-bg);
      color: white;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Space Grotesk', sans-serif;
    }

    /* Smooth Scroll */
    html {
      scroll-behavior: smooth;
    }

    /* Custom Red Pulse Animation (Not used in Hero anymore, but kept for context) */
    @keyframes pulse-red {
      0% { box-shadow: 0 0 0 0 rgba(225, 29, 72, 0.4); }
      70% { box-shadow: 0 0 0 20px rgba(225, 29, 72, 0); }
      100% { box-shadow: 0 0 0 0 rgba(225, 29, 72, 0); }
    }

    /* Abstract background blob movement (No longer used in Hero) */
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }

    .animate-blob {
      animation: blob 7s infinite;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .glass-nav {
      background: rgba(5, 5, 5, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .card-glow:hover {
      box-shadow: 0 0 30px rgba(225, 29, 72, 0.15);
      border-color: rgba(225, 29, 72, 0.5);
    }
    
    /* Hide scrollbar for clean horizontal scroll if needed */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
  );
}

export default GlobalStyles;
