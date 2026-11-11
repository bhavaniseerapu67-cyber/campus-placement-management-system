
import { Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Join CampusConnect today</p>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Create password" required />

          <label>Register As</label>
          <select required>
            <option value="">Select your role</option>
            <option value="student">Student</option>
            <option value="company">Company</option>
          </select>

          <button type="submit">Register</button>
        </form>

        <p className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>

        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
}

export default Register;
