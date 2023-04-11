import "./auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/Static/header/header";
import Footer from "../../../Components/Static/footer/footer";
export default function Login() {
  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/employee/home");
  }

  return (
    <>
      <Header />
      <main id="login">
        <div className="auth-image">
          hello
        </div>
        <form id="login-form">
          <h4>Login Into your Account</h4>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <select>
            <option>Employer</option>
            <option>Department</option>
            <option>Employee</option>
          </select>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          <p to="reset">
            Forgot password?<Link to="/reset"> Reset</Link>
          </p>
          <p to="/signup">
            Dont have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}
