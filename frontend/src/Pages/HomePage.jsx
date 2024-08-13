import Features from "../components/Features/Features";
import Collections from "../components/Collections/Collections";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import TimerOffer from "../components/TimerOffer/TimerOffer";
import AboutBlog from "../components/AboutBlog/AboutBlog";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import HeroSection from "../components/HeroSection/HeroSection";
import BlogSection from "../components/BlogSection/BlogSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Collections />
      <AboutBlog />
      <NewArrivals />
      <TimerOffer />
      <BlogSection/>
      <NewsLetter />
    </>
  );
};

export default HomePage;
