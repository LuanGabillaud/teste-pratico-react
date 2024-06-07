import React, { useState, useEffect, FormEvent } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import AuthStyle from "../styles/AuthStyles";
import { Link } from "react-router-dom";
import "../css/Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Mock login
    if (username === "user@example.com" && password === "12345678") {
      localStorage.setItem("authToken", "mockToken123");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <AuthStyle backgroundColor="#101310" backgroundImage="linear-gradient(to bottom, #2F2F2F 85%, #00B15C)">
      <AuthLayout
        header={<h1>Acesse o sistema</h1>}
        footer={
          <>
            <div className="recall-forget">
              <label>
                <input type="checkbox" /> Lembre de mim
              </label>
              <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
            </div>
            <div className="signup-link">
              <p>
                Não tem uma conta? <Link to="/cadastre-se">Registrar</Link>
              </p>
            </div>
          </>
        }
      >
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="E-mail"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Login</button>
        </form>
      </AuthLayout>
    </AuthStyle>
  );
};

export default Login;
