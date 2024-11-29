import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Contact1 from "./components/Contact";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        {/* <Services /> */}
       {/* <Pricing /> */}
      <Roadmap /> 
      <About/>
      <Contact1/>
      
      <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
