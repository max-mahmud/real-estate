import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Company from "./components/Company/Company";
import Slider from "./components/Slider/Slider";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import CallTOAction from "./components/CalltoAction/CallTOAction";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="white-wrapper">
        <Header />
        <Hero />
      </div>

      <Company />
      <Slider />
      <Value />
      <Contact />
      <CallTOAction />
      <Footer />
    </div>
  );
}

export default App;
