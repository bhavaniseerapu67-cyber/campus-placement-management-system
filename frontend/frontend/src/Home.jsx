
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>
          Campus<span>Connect</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#jobs">Jobs</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="tagline">
            YOUR CAREER STARTS HERE
          </p>

          <h1>
            Welcome to Campus
            <span> Placement Management</span>
          </h1>

          <p className="description">
            Connect students, companies and placement officers
            on one platform. Discover opportunities and take
            the next step towards your dream career.
          </p>

          <Link to="/login" className="explore-btn">
            Explore Opportunities
          </Link>

        </div>
      </section>

      {/* About Section */}
      <section className="features" id="about">

        <h2>Our Platform</h2>

        <p>
          Everything you need for successful campus placements.
        </p>

        <div className="feature-cards">

          <div className="card">
            <h3>Students</h3>
            <p>
              Create profiles, upload resumes and apply for jobs.
            </p>
          </div>

          <div className="card">
            <h3>Companies</h3>
            <p>
              Post job openings and find talented students.
            </p>
          </div>

          <div className="card">
            <h3>Placement Officers</h3>
            <p>
              Manage placement drives and monitor recruitment.
            </p>
          </div>

        </div>
      </section>

      {/* Jobs Section */}
      <section className="features" id="jobs">
        <h2>Career Opportunities</h2>
        <p>
          Explore job opportunities and prepare for your future.
        </p>

        <Link to="/login" className="explore-btn">
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer id="contact">
        <p>
          © 2026 CampusConnect | Campus Placement Management System
        </p>
      </footer>

    </div>
  );
}

export default Home;
