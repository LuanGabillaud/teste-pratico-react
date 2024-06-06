import styled from 'styled-components';

export const GetStarted = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 78px;
    isolation: isolate;

    position: absolute;
    width: 1285px;
    height: 762px;
    left: 43px;
    top: 112px;
`;

export const TextGetStarted = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;

    width: 504px;
    height: 396px;

    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
`;

export const FirstText = styled.p`
    width: 504px;
    height: 228px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 76px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const SecondText = styled.p`
    width: 479px;
    height: 64px;
    text-align: left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #8C8F99;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const Button = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 4px;
    gap: 4px;
    width: 196px;
    height: 48px;
    font-weight: 700;
    background: #01FE84;
    box-shadow: 0px 4px 59px rgba(1, 254, 132, 0.4);
    border-radius: 999px;
    flex: none;
    order: 1;
    flex-grow: 0;
`

const HomeStyles: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default HomeStyles;
