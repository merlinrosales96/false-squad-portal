import Hero from "../sections/Home/HeroSection";
import Videos from "../sections/Home/VideoSection";
import MemberSection from "../sections/Home/MemberSection";
import AboutSection from "../sections/Home/AboutSection";
const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <MemberSection />
      <Videos />
    </>
  );
};

export default Home;
