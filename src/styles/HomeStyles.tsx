import styled from "styled-components";

export const Losango = styled.div`
  background: linear-gradient(
    137.69deg,
    #202420 23.82%,
    rgba(32, 36, 32, 0) 124.54%
  );
  backdrop-filter: blur(5px);
  border-radius: 27px;
  transform: rotate(39.08deg);
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const LosangoRight = styled(Losango)`
  position: absolute;
  width: 280.52px;
  height: 280.52px;
  right: -200.76px;
  top: 484px;
  z-index: 2;
`;

export const LosangoLeft = styled(Losango)`
  position: absolute;
  width: 325.52px;
  height: 325.52px;
  left: -223px;
  top: 784px;
  z-index: 0;
`;

export const GetStarted = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 78px;
  isolation: isolate;
  position: absolute;
  width: 100%;
  height: 762px;
  left: 43px;
  top: 112px;
`;

export const TextGetStarted = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 76px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SecondText = styled.p`
  width: 479px;
  height: 64px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #8c8f99;
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
  background: #01fe84;
  box-shadow: 0px 4px 59px rgba(1, 254, 132, 0.4);
  border-radius: 999px;
  cursor: pointer;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const StudyAnywhere = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  isolation: isolate;
  position: absolute;
  width: 100%;
  left: 112px;
  top: 1024px;
`;

export const TextStudyAnywhere = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0px;
  gap: 50px;
  width: 537px;
  height: 478px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
`;

export const ImgStudyAnywhere = styled.div`
  width: 721px;
  margin-top: -80px;
  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 2;
`;

export const CarouselStudyAnywhere = styled.div`
  width: 423px;
  height: 132px;
  padding-top: 80px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;


const HomeStyles: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default HomeStyles;
