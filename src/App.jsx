import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Company from "./components/Company/Company";
import Slider from "./components/Slider/Slider";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <div>
      <div className="white-wrapper">
        <Header />
        <Hero />
      </div>
      </div>
      <Company />
      <Slider />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
