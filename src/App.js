import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navBar/navBar";
import { Section } from "./components/mainSection/section";
import { Footer } from "./components/footer/footer";
import { HeroSection } from "./components/hero/hero";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section />
      <Footer />
    </>
  );
}

export default App;
