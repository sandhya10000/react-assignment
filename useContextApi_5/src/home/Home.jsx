import React, { useContext } from "react";
import myContext from "../../Context/myContext";

export default function Home() {
  const { theme } = useContext(myContext);

  const bgColor = theme === "light" ? "white" : "#121212";
  const textColor = theme === "light" ? "black" : "white";

  return (
    <div className=" p-4" style={{ backgroundColor: bgColor }}>
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 style={{ color: textColor }}>
          🚀 Build Modern Web Apps with Confidence
        </h1>
        <p className="mt-3" style={{ color: textColor }}>
          Learn, practice, and grow with hands-on React and JavaScript projects.
        </p>

        <div className="mt-4">
          <button className="btn btn-primary mx-2">Get Started</button>
          <button className="btn btn-outline-secondary mx-2">
            View Projects
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-5">
        <h2 style={{ color: textColor }}>👋 About Me</h2>
        <p className="mt-3" style={{ color: textColor }}>
          I am a passionate frontend developer focused on building responsive
          and user-friendly web applications using React.js and modern
          JavaScript.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-5">
        <h2 style={{ color: textColor }}>🛠️ Skills & Technologies</h2>
        <ul className="list-group mt-3">
          <li className="list-group-item">React.js</li>
          <li className="list-group-item">JavaScript (ES6+)</li>
          <li className="list-group-item">HTML5 & CSS3</li>
          <li className="list-group-item">Bootstrap / Tailwind CSS</li>
          <li className="list-group-item">Node.js (Advance)</li>
          <li className="list-group-item">Git & GitHub</li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="mb-5">
        <h2 style={{ color: textColor }}>✨ What I Focus On</h2>
        <div className="row mt-3">
          <div className="col-md-6">
            <p style={{ color: textColor }}>✔ Clean & reusable components</p>
            <p style={{ color: textColor }}>✔ Modern React Hooks</p>
          </div>
          <div className="col-md-6">
            <p style={{ color: textColor }}>✔ Responsive UI design</p>
            <p style={{ color: textColor }}>✔ Performance-friendly code</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="text-center mb-5">
        <h2 style={{ color: textColor }}>📌 Let’s Build Something Together</h2>
        <p className="mt-3" style={{ color: textColor }}>
          Interested in collaborating or learning together? Get in touch!
        </p>
        <button className="btn btn-success">📩 Contact Me</button>
      </section>

      {/* Footer */}
      <footer className="text-center">
        <p style={{ color: textColor }}>
          © 2026 | Built with ❤️ using React.js
        </p>
      </footer>
    </div>
  );
}
