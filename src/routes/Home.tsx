// import React from "react";
import { Link } from "react-router-dom";
import LandingPageStyles from "../styles/LandingPageStyles"

const Login = () => {

  return (
    <LandingPageStyles backgroundColor="#2F2F2F" backgroundImage="none">
    <div>        
        <nav>Home <Link to="/login">Log In</Link> <Link to="/cadastre-se">Sign In</Link></nav>
    </div>
    </LandingPageStyles>
  );
};

export default Login;
