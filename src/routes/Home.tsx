import PageLayout from "../components/PageLayout";
import man1 from "../assets/man1.svg";
import HomeStyles, { GetStarted, TextGetStarted, FirstText, SecondText, Button } from "../styles/HomeStyles";

const Home = () => {
  return (
    <PageLayout>
        <HomeStyles>
        <GetStarted>
            <img src={man1} alt="logo" width="600px" />            
            <TextGetStarted>
                <FirstText>Your Learning Journey Begins Here!</FirstText>
                <SecondText>where knowledge meets convenience in the palm of your hand!</SecondText>
                <Button>Get Started</Button>
            </TextGetStarted>
        </GetStarted>
        </HomeStyles>
        
    </PageLayout>
  );
};

export default Home;
