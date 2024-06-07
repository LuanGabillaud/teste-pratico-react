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

export const FavoriteClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 34px;

  position: absolute;
  width: 1217px;
  height: 526px;
  left: 112px;
  top: 1847.42px;
`;

export const TitleFavoriteClass = styled.h1`
  width: 441px;
  height: 72px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #fbf2f2;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardsFavoriteClass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 13px;
  width: 100%;
  height: 338px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CardFavoriteClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 29px;
  width: 397px;
  height: 338px;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

export const ContentCardFavoriteClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 397px;
  height: 140px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const TitleCardFavoriteClasss = styled.div`
  width: 296px;
  height: 22px;
  text-align: left;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 5px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DescriptionCardFavoriteClass = styled.div`
  width: 397px;
  height: 72px;
  text-align: left;
  margin-top: -120px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #8c8f99;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const InfoCardFavoriteClass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  color: #fff;
  gap: 18px;

  width: 308px;
  height: 20px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const ButtonFavoriteClass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 80%;
  left: 112px;
  top: 547.42px;
`;

export const ProfessionalMentor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 32px;
  position: absolute;
  width: 1217px;
  height: 662px;
  left: 112px;
  top: 2523.42px;
`;

export const HeaderProfessionalMentor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 127px;
  width: 100%;
  height: 144px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const FirstTextHeaderProfessionalMentor = styled.div`
  width: 487px;
  height: 144px;
  text-align: left;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #fbf2f2;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SecondtextHeaderProfessionalMentor = styled.div`
  width: 603px;
  height: 96px;
  text-align: left;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #8c8f99;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ContentProfessionalMentor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 100%;
  height: 406px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CardProfessionalMentor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 295px;
  height: 406px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ContentCardProfessionalMentor = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 295px;
height: 60px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`;

export const TitleCardProfessionalMentor = styled.div`
width: 362px;
height: 32px;
text-align: left;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 32px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
`;

export const DescriptionCardProfessionalMentor = styled.div`
width: 328px;
height: 24px;
text-align: left;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
text-transform: capitalize;
color: #707170;
flex: none;
order: 1;
flex-grow: 0;
`;

export const ButtonProfessionalMentor = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: absolute;
width: 80%;
left: 112px;
top: 740.42px;
`;

const HomeStyles: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default HomeStyles;
