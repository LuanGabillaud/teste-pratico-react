import PageLayout from "../components/PageLayout";
import Carousel from "react-multi-carousel";
import CarouselItem from "../components/CarouselItem";
import "react-multi-carousel/lib/styles.css";
import man1 from "../assets/man1.svg";
import man2 from "../assets/man2.svg";
import ilustrationIcon from "../assets/ilustration-icon.svg";
import uiUxIcon from "../assets/ui-ux-icon.svg";
import logoIcon from "../assets/logo-icon.svg";
import HomeStyles, {
  GetStarted,
  TextGetStarted,
  FirstText,
  SecondText,
  Button,
  LosangoRight,
  LosangoLeft,
  StudyAnywhere,
  TextStudyAnywhere,
  ImgStudyAnywhere,
  CarouselStudyAnywhere,
} from "../styles/HomeStyles";

const Home = () => {
  return (
    <PageLayout>
      <HomeStyles>
        <GetStarted>
          <img src={man1} alt="logo" width="600px" />
          <TextGetStarted>
            <LosangoRight />
            <LosangoLeft />
            <FirstText>Your Learning Journey Begins Here!</FirstText>
            <SecondText>
              where knowledge meets convenience in the palm of your hand!
            </SecondText>
            <Button>Get Started</Button>
          </TextGetStarted>
        </GetStarted>
        <StudyAnywhere>
          <TextStudyAnywhere>
            <FirstText>study anywhere easily online</FirstText>
            <SecondText>
              Discover the freedom of online learning. Our platform empowers you
              to access quality education from the comfort of your home or on
              the go. Illustration UI/UX Logo
            </SecondText>
            <CarouselStudyAnywhere>
              <Carousel
                additionalTransfrom={0}
                arrows
                centerMode={false}
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 2,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
              >
                <CarouselItem image={ilustrationIcon} />
                <CarouselItem image={uiUxIcon} />
                <CarouselItem image={logoIcon} />
              </Carousel>
            </CarouselStudyAnywhere>
          </TextStudyAnywhere>
          <ImgStudyAnywhere>
            <img src={man2} alt="logo" width="600px" />
          </ImgStudyAnywhere>
        </StudyAnywhere>
      </HomeStyles>
    </PageLayout>
  );
};

export default Home;
