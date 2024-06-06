import React, { useState, FormEvent } from "react";
import { FaUser } from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";
import AuthStyle from "../styles/AuthStyles";
import { Link } from "react-router-dom";
import "../css/Login.css";

const EsqueceuSenha: React.FC = () => {
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState<string>("");

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event: FormEvent) => {
    // Impede que a página seja recarregada
    event.preventDefault();

    // Faz o console log das credenciais do usuário
    console.log("Dados de Login:", { username });
  };

  return (
    <AuthStyle backgroundColor="#2F2F2F" backgroundImage="linear-gradient(to bottom, #2F2F2F 85%, #00B15C)">
    <AuthLayout
      header={<h1>Recuperar senha</h1>}
      footer={
        <>
          <button type="submit">Enviar</button>
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
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
      </form>
    </AuthLayout>
    </AuthStyle>
  );
};

export default EsqueceuSenha;
