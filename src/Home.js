import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="home-bg">
      <div className="login-container">
        <img
          src="/koral logo.jpg"
          alt="Company Logo"
          className="company-logo"
        />
        <h1>KoralTech Softwares India Pvt. Ltd</h1>
        <p>
          10th Main Rd, Vivekananda Layout, Jayanti Nagar, Horamavu, Bengaluru,
          Karnataka 560016
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
