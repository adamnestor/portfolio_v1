function App() {
  return (
    <div className="min-h-screen bg-brand-light text-text-dark">
      {/* Header */}
      <header className="p-6 border-b border-brand-blue/10">
        <h1 className="text-4xl font-bold">
          Portfolio
        </h1>
        <p className="text-text-muted mt-2">
          Frontend Developer & Designer
        </p>
      </header>

      {/* Main content */}
      <main className="p-8">
        {/* About section example */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Welcome to My Portfolio
          </h2>
          
          <div className="space-y-6">
            {/* Card example */}
            <div className="bg-brand-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">About Me</h3>
              <p className="text-text-muted mt-2">
                I'm a passionate developer focused on creating beautiful and functional web experiences.
              </p>
              <p className="text-text-light mt-2 text-sm">
                Based in New York City • Available for freelance
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-blue text-brand-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                View Projects
              </button>
              <button className="border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg hover:bg-brand-blue hover:text-brand-white transition-colors">
                Contact Me
              </button>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {/* Feature cards */}
              <div className="bg-brand-white p-4 rounded-lg">
                <h4 className="font-semibold">Frontend Development</h4>
                <p className="text-text-muted text-sm mt-1">
                  Modern web applications with React
                </p>
              </div>
              
              <div className="bg-brand-white p-4 rounded-lg">
                <h4 className="font-semibold">UI/UX Design</h4>
                <p className="text-text-muted text-sm mt-1">
                  Clean and intuitive user interfaces
                </p>
              </div>

              <div className="bg-brand-white p-4 rounded-lg">
                <h4 className="font-semibold">Responsive Design</h4>
                <p className="text-text-muted text-sm mt-1">
                  Mobile-first approach
                </p>
              </div>

              <div className="bg-brand-white p-4 rounded-lg">
                <h4 className="font-semibold">Performance</h4>
                <p className="text-text-muted text-sm mt-1">
                  Optimized for speed and efficiency
                </p>
              </div>
            </div>

            {/* Links section */}
            <div className="flex gap-4 text-text-muted">
              <a href="#" className="text-brand-blue hover:underline">
                View Resume →
              </a>
              <a href="#" className="text-brand-blue hover:underline">
                GitHub Profile →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-text-light border-t border-brand-blue/10">
        <p className="text-sm">
          Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;