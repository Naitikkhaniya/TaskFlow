import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-page">
      <nav className="home-nav">
        <h1 className="logo">TaskFlow</h1>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register" className="primary">Get Started</Link>
        </div>
      </nav>

      <section className="hero">
        <h2>Organize your work. Stay in control.</h2>
        <p>
          TaskFlow helps you manage your tasks, projects and productivity in one
          place.
        </p>

        <div className="hero-actions">
          <Link to="/register" className="btn-primary">Start Free</Link>
          <Link to="/login" className="btn-secondary">Login</Link>
        </div>
      </section>

      <section className="features">
        <div>
          <h3>Secure</h3>
          <p>JWT based authentication with protected APIs</p>
        </div>
        <div>
          <h3>Fast</h3>
          <p>Built with FastAPI and React</p>
        </div>
        <div>
          <h3>Personal</h3>
          <p>Your tasks are private and linked to your account</p>
        </div>
      </section>
    </div>
  );
}
