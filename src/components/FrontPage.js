import Header from './Header';

function FrontPage() {
    
    
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}<Header />
      <section className="bg-blue-500 text-white min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-xl md:text-2xl">A passionate developer building web experiences.</p>
        <div className="mt-8">
          <a href="#about" className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100">
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-center leading-relaxed">
            I'm a developer with a love for crafting beautiful and functional web applications.
            My journey started with curiosity, and now I'm constantly learning and growing in the field of web development.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-gray-600">
                HTML, CSS, JavaScript, React.js, Tailwind CSS, etc.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-gray-600">
                Node.js, Express.js, MongoDB, REST APIs, etc.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
              <p className="text-gray-600">
                Git, Docker, CI/CD, Agile methodologies, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-6">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p>&copy; 2024 [Your Name]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default FrontPage


