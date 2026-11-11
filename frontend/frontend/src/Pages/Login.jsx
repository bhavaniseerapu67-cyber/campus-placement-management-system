
import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back!</h2>
        <p>Login to your CampusConnect account</p>

        <form>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <label>Login As</label>
          <select required>
            <option value="">Select your role</option>
            <option value="student">Student</option>
            <option value="company">Company</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Login</button>
        </form>

        <p className="auth-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>

        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
}

export default Login;
