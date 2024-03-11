import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { LanguageProvider } from "./components/context/LanguageContext";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import WhatsappButton from "./components/whatsappButton/WhatsappButton";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
        <WhatsappButton />
      </LanguageProvider>
    </div>
  );
}

export default App;
