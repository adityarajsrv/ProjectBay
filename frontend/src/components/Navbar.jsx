const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="h-16 max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
          <h2 className="text-white text-2xl font-semibold tracking-tight">
            Pirate<span className="text-blue-500">Bay</span>
          </h2>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Home", "About", "Features", "Contact"].map((item) => (
              <button
                key={item}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>
          <button className="bg-blue-500/90 hover:bg-blue-500 text-black px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg shadow-blue-500/20">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
