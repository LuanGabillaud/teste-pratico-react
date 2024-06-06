import React from 'react';
import { LandingPageStyleProps } from '../types/LandingPageTypes';
import { createGlobalStyle } from 'styled-components';

// Defina os estilos globais
const GlobalStyle = createGlobalStyle<{ backgroundColor: string, backgroundImage: string }>`
  body {
    background-color: ${(props) => props.backgroundColor || '#2F2F2F'};
    background-image: ${(props) => props.backgroundImage || 'none'};
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    gap: 4px;
    isolation: isolate;
    position: absolute;
    width: 100%;
    height: 88px;
    left: 0px;
    top: 0px;
    backdrop-filter: blur(91.5px);
  }
`;

const AuthStyle: React.FC<LandingPageStyleProps> = ({ backgroundColor, children, backgroundImage }) => {
  return (
    <>
      <GlobalStyle backgroundColor={backgroundColor} backgroundImage={backgroundImage} />
      <div>{children}</div>
    </>
  );
};

export default AuthStyle;
