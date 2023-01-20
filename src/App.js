import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/page/About";
import Home from "./components/page/Home";
import Advice from "./components/page/Advice";
import Service from "./components/page/Service";
import Contact from "./components/page/Contact";
import Footer from "./components/footer/Footer";
import FooterIcons from "./components/footer/FooterIcons";

function App() {
  return (
    <div className="App">
      <Header />
        <Home />
      <Container>
        <About />
        <Advice />
        <Service />
        <Contact />
      </Container>
        <Footer />
        <FooterIcons />/
    </div>
  );
}

export default App;
