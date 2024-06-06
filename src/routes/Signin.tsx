import React, { useState, FormEvent } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";
import AuthStyle from "../styles/AuthStyles";
import { Link } from "react-router-dom";
import "../css/Login.css";

const Registrar: React.FC = () => {
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event: FormEvent) => {
    // Impede que a página seja recarregada
    event.preventDefault();

    // Faz o console log das credenciais do usuário
    console.log("Dados de Cadastro:", { username, password });
  };

  return (
    <AuthStyle backgroundColor="#2F2F2F" backgroundImage="linear-gradient(to bottom, #2F2F2F 85%, #00B15C)">
    <AuthLayout
      header={<h1>Registre-se</h1>}
      footer={
        <>          
          <button type="submit">Registrar</button>
          <div className="signup-link">
            <p>
            Voltar para o <Link to="/login">Login</Link>
            </p>
          </div>
        </>
      }
    >
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome Completo"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
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
        <div className="input-field">
          <input
            type="password"
            placeholder="Confirme a Senha"
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
      </form>
    </AuthLayout>
    </AuthStyle>
  );
};

export default Registrar;
