import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  color: #101310;
`;

const WelcomeMessage = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #00B15C;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00964f;
  }
`;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <DashboardContainer>
      <WelcomeMessage>Bem-vindo ao Dashboard</WelcomeMessage>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </DashboardContainer>
  );
};

export default Dashboard;
