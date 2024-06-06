import React, { useState, FormEvent } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";
import AuthStyle from "../styles/GlobalStyles";
import "../css/Login.css";

const Login: React.FC = () => {
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event: FormEvent) => {
    // Impede que a página seja recarregada
    event.preventDefault();

    // Faz o console log das credenciais do usuário
    console.log("Dados de Login:", { username, password });
  };

  return (
    <AuthStyle backgroundColor="#2F2F2F" backgroundImage="linear-gradient(to bottom, #2F2F2F 85%, #00B15C)">
    <AuthLayout
      header={<h1>Acesse o sistema</h1>}
      footer={
        <>
          <div className="recall-forget">
            <label>
              <input type="checkbox" /> Lembre de mim
            </label>
            <a href="#">Esqueceu sua senha?</a>
          </div>
          <button type="submit">Login</button>
          <div className="signup-link">
            <p>
              Não tem uma conta? <a href="#">Registrar</a>{" "}
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
      </form>
    </AuthLayout>
    </AuthStyle>
  );
};

export default Login;
