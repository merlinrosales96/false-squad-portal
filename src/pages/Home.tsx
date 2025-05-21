import Hero from "../sections/Home/HeroSection";
import Videos from "../sections/Home/VideoSection";
import MembersSection from "../sections/Home/MemberSection";
import MemberHero from "../sections/Home/MemberHero";
import AboutSection from "../sections/Home/AboutSection";
const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <MemberHero />
      <Videos />
    </>
  );
};

export default Home;
