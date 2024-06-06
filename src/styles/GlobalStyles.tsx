import React from 'react';
import { AuthStyleProps } from '../types/AuthTypes';
import { createGlobalStyle } from 'styled-components';

// Defina os estilos globais
const GlobalStyle = createGlobalStyle<{ backgroundColor: string, backgroundImage: string }>`
  body {
    background-color: ${(props) => props.backgroundColor || '#2F2F2F'};
    background-image: ${(props) => props.backgroundImage || 'none'};
  }
`;

const AuthStyle: React.FC<AuthStyleProps> = ({ backgroundColor, children, backgroundImage }) => {
  return (
    <>
      <GlobalStyle backgroundColor={backgroundColor} backgroundImage={backgroundImage} />
      <div>{children}</div>
    </>
  );
};

export default AuthStyle;
