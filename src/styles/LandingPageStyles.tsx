import styled, { createGlobalStyle } from 'styled-components';

interface LandingPageProps {
  backgroundColor: string;
  backgroundImage: string;
}

export const GlobalStyle = createGlobalStyle<LandingPageProps>`
  body {
    background-color: ${(props) => props.backgroundColor};
    background-image: ${(props) => props.backgroundImage};
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  gap: 4px;
  position: absolute;
  width: 100%;
  height: 88px;
  left: 0px;
  top: 0px;
  backdrop-filter: blur(91.5px);

  @media (max-width: 768px) {
    padding: 20px 2%;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Links = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(Links)`
  a {
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      color: #ffffff;
      opacity: 1;
    }

    &.inactive {
      color: #c3c0c0;
      opacity: 0.7;
    }
    
  }    
`;

export const Button = styled.a`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 12px 4px;
   gap: 5px;
   width: 124px;
   height: 48px;
   flex: none;
   cursor: pointer;
   order: 0;
   flex-grow: 0;
`;

export const ButtonLogin = styled(Button)`
  background: #01FE84;
  border: 1px solid #01FE84;       
  border-radius: 999px;
  font-weight: 700;
  color: #101310;
  box-shadow: 0px 4px 59px rgba(1, 254, 132, 0.4);
`;

export const ButtonSignin = styled(Button)`
  background: transparent;
  border: 1px solid #01FE84;     
  border-radius: 999px;  
  margin-right: 10px;
  font-weight: 700;
  color: #01FE84;
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 47px 0px;
    gap: 36px;

    position: absolute;
    width: 100%;
    height: 309px;
    left: 0px;
    top: 4054.42px;

    background: #1F241F;    
`;

export const InfoFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 504px;

    width: 1216px;
    height: 84px;


    flex: none;
    order: 2;
    flex-grow: 0;

    & p {        
      color: #c3c0c0;
      opacity: 0.7;
    }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(1, 254, 132, 0.5);
  border-radius: 999px;
  width: 426px;
  height: 48px;
  overflow: hidden; /* Para garantir que os elementos internos se ajustem ao contêiner */
`;

export const InputFooter = styled.input`
  background-color: transparent;
  flex: 1;
  border: none;
  padding: 0 24px;
  height: 100%;
  outline: none;
  border-radius: 999px 0 0 999px;
  color: #01FE84;
`;

export const ButtonFooter = styled(Button)`
  background: #01FE84;
  border: 1px solid #01FE84;
  font-weight: 700;
  color: #101310;
  box-shadow: 0px 4px 59px rgba(1, 254, 132, 0.8);
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LandingPageStyles: React.FC<LandingPageProps & { children: React.ReactNode }> = ({ backgroundColor, backgroundImage, children }) => {
  return (
    <>
      <GlobalStyle backgroundColor={backgroundColor} backgroundImage={backgroundImage} />
      {children}
    </>
  );
};

export default LandingPageStyles;
