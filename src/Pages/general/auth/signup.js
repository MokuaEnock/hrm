import "./auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Components/Static/header/header";
import Footer from "../../../Components/Static/footer/footer";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          email: formData.email,
          name: formData.name,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            localStorage.setItem("employerId", data.id);
            // localStorage.setItem("jwtToken", data.jwt);
            navigate("/employer/employees");
          });
        } else {
          response.json().then((data) => {
            console.log(data.errors);
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <main id="signup">
        <div></div>
        <form id="login-form" onSubmit={handleSubmit}>
          <h4>Register Organisation</h4>
          <input
            type="text"
            placeholder="Organisation name"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          <p to="/reset">
            Forgot password?<Link to="/reset"> Reset</Link>
          </p>
          <p to="/signup">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}
