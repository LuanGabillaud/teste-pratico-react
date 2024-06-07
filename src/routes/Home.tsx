import PageLayout from "../components/PageLayout";
import Carousel from "react-multi-carousel";
import CarouselItem from "../components/CarouselItem";
import StudentCarouselItem from "../components/CarouselStudents";
import "react-multi-carousel/lib/styles.css";
import man1 from "../assets/man1.svg";
import man2 from "../assets/man2.svg";
import woman from "../assets/woman.svg";
import ilustrationIcon from "../assets/ilustration-icon.svg";
import imgCard1 from "../assets/img-card1.png";
import imgCard2 from "../assets/img-card2.webp";
import imgCard3 from "../assets/img-card3.png";
import uiUxIcon from "../assets/ui-ux-icon.svg";
import logoIcon from "../assets/logo-icon.svg";
import star from "../assets/star.svg";
import paper from "../assets/paper.svg";
import jemy from "../assets/jemy.jpg";
import seikoji from "../assets/seikoji.jpg";
import miracle from "../assets/miracle.webp";
import dery from "../assets/dery.jpg";
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
  FavoriteClass,
  TitleFavoriteClass,
  CardsFavoriteClass,
  CardFavoriteClass,
  ContentCardFavoriteClass,
  TitleCardFavoriteClasss,
  DescriptionCardFavoriteClass,
  InfoCardFavoriteClass,
  ProfessionalMentor,
  HeaderProfessionalMentor,
  ContentProfessionalMentor,
  FirstTextHeaderProfessionalMentor,
  SecondtextHeaderProfessionalMentor,
  CardProfessionalMentor,
  ContentCardProfessionalMentor,
  DescriptionCardProfessionalMentor,
  TitleCardProfessionalMentor,
  ButtonFavoriteClass,
  ButtonProfessionalMentor,
  StudentsCarousel,
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

        <FavoriteClass>
          <TitleFavoriteClass>Favorite Class</TitleFavoriteClass>
          <CardsFavoriteClass>
            <CardFavoriteClass>
              <div>
                <img
                  style={{
                    width: "397px",
                    height: "169px",
                    background: "#313631",
                    borderRadius: "16px",
                  }}
                  src={imgCard1}
                  alt=""
                />
              </div>
              <ContentCardFavoriteClass>
                <TitleCardFavoriteClasss>
                  Logo Branding Guideline
                </TitleCardFavoriteClasss>
              </ContentCardFavoriteClass>
              <DescriptionCardFavoriteClass>
                Your trusted resource for maintaining consistent and impactful
                logo representation
              </DescriptionCardFavoriteClass>
              <InfoCardFavoriteClass>
                <div>
                  <img src={star} alt="" /> 5,0
                </div>
                <div>
                  <img src={paper} alt="" /> 20 Lessons
                </div>
              </InfoCardFavoriteClass>
            </CardFavoriteClass>
            <CardFavoriteClass>
              <div>
                <img
                  style={{
                    width: "397px",
                    height: "169px",
                    background: "#313631",
                    borderRadius: "16px",
                  }}
                  src={imgCard2}
                  alt=""
                />
              </div>
              <ContentCardFavoriteClass>
                <TitleCardFavoriteClasss>Movie Maker</TitleCardFavoriteClasss>
              </ContentCardFavoriteClass>
              <DescriptionCardFavoriteClass>
                Unleash your creativity and produce stunning videos with our
                step-by-step guideline
              </DescriptionCardFavoriteClass>
              <InfoCardFavoriteClass>
                <div>
                  <img src={star} alt="" /> 4,8
                </div>
                <div>
                  <img src={paper} alt="" /> 22 Lessons
                </div>
              </InfoCardFavoriteClass>
            </CardFavoriteClass>
            <CardFavoriteClass>
              <div>
                <img
                  style={{
                    width: "397px",
                    height: "169px",
                    background: "#313631",
                    borderRadius: "16px",
                  }}
                  src={imgCard3}
                  alt=""
                />
              </div>
              <ContentCardFavoriteClass>
                <TitleCardFavoriteClasss>
                  UI Wireframe and Flow
                </TitleCardFavoriteClasss>
              </ContentCardFavoriteClass>
              <DescriptionCardFavoriteClass>
                Our comprehensive guideline is your roadmap to crafting seamless
                and user-friendly digital experiences.
              </DescriptionCardFavoriteClass>
              <InfoCardFavoriteClass>
                <div>
                  <img src={star} alt="" /> 4,8
                </div>
                <div>
                  <img src={paper} alt="" /> 10 Lessons
                </div>
              </InfoCardFavoriteClass>
              <ButtonFavoriteClass>
                <Button>Show All Class</Button>
              </ButtonFavoriteClass>
            </CardFavoriteClass>
          </CardsFavoriteClass>
        </FavoriteClass>

        <ProfessionalMentor>
          <HeaderProfessionalMentor>
            <FirstTextHeaderProfessionalMentor>
              Professional Mentor
            </FirstTextHeaderProfessionalMentor>
            <SecondtextHeaderProfessionalMentor>
              Are you looking to advance your career, gain industry insights, or
              receive expert guidance in your professional journey? Our
              Professional Mentor program is designed to connect you with
              seasoned experts who can provide invaluable mentorship.
            </SecondtextHeaderProfessionalMentor>
          </HeaderProfessionalMentor>
          <ContentProfessionalMentor>
            <CardProfessionalMentor>
              <div>
                <img
                  style={{
                    width: "295px",
                    height: "330px",
                    background: "#313631",
                    borderRadius: "16px",
                  }}
                  src={jemy}
                  alt=""
                />
              </div>
              <ContentCardProfessionalMentor>
                <TitleCardProfessionalMentor>
                  Jemy Durinto
                </TitleCardProfessionalMentor>
                <DescriptionCardProfessionalMentor>
                  Logo Designer
                </DescriptionCardProfessionalMentor>
              </ContentCardProfessionalMentor>
            </CardProfessionalMentor>
            <CardProfessionalMentor>
              <div>
                <img
                  style={{
                    width: "295px",
                    height: "330px",
                    background: "#313631",
                    borderRadius: "16px",
                  }}
                  src={seikoji}
                  alt=""
                />
              </div>
              <ContentCardProfessionalMentor>
                <TitleCardProfessionalMentor>
                  Seikoji De Loparto
                </TitleCardProfessionalMentor>
                <DescriptionCardProfessionalMentor>
                  Logo Designer
                </DescriptionCardProfessionalMentor>
              </ContentCardProfessionalMentor>
            </CardProfessionalMentor>
            <CardProfessionalMentor>
              <div>
                <img
                  style={{
                    width: "295px",
                    height: "330px",
                    background: "#313631",
                    borderRadius: "16px",
                  }}
                  src={miracle}
                  alt=""
                />
              </div>
              <ContentCardProfessionalMentor>
                <TitleCardProfessionalMentor>
                  Miracle Panta
                </TitleCardProfessionalMentor>
                <DescriptionCardProfessionalMentor>
                  UI/UX Designer
                </DescriptionCardProfessionalMentor>
              </ContentCardProfessionalMentor>
            </CardProfessionalMentor>
            <CardProfessionalMentor>
              <div>
                <img
                  style={{
                    width: "295px",
                    height: "330px",
                    background: "#313631",
                    borderRadius: "16px",
                  }}
                  src={dery}
                  alt=""
                />
              </div>
              <ContentCardProfessionalMentor>
                <TitleCardProfessionalMentor>
                  Dery Franklin
                </TitleCardProfessionalMentor>
                <DescriptionCardProfessionalMentor>
                  Motion Graphic
                </DescriptionCardProfessionalMentor>
              </ContentCardProfessionalMentor>
            </CardProfessionalMentor>
          </ContentProfessionalMentor>
          <ButtonProfessionalMentor>
            <Button>Show More</Button>
          </ButtonProfessionalMentor>
        </ProfessionalMentor>

        <StudentsCarousel>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
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
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <StudentCarouselItem
              image={woman}
              name="Maryam Jessica"
              headline="What Our Students Are Saying"
              description="The flexibility of online courses allowed me to balance my
                    studies with my job and family life. The resources and materials
                    were top-notch, and the interactive discussions were a highlight"
            />
            <StudentCarouselItem
              image={woman}
              name="Michele Obama"
              headline="What Our Students Are Saying"
              description="The flexibility of online courses allowed me to balance my
                    studies with my job and family life. The resources and materials
                    were top-notch, and the interactive discussions were a highlight"
            />
            <StudentCarouselItem
              image={woman}
              name="Stephany Ohara"
              headline="What Our Students Are Saying"
              description="The flexibility of online courses allowed me to balance my
                    studies with my job and family life. The resources and materials
                    were top-notch, and the interactive discussions were a highlight"
            />
          </Carousel>
        </StudentsCarousel>
      </HomeStyles>
    </PageLayout>
  );
};

export default Home;
