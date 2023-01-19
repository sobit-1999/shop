import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Card1 from "./components/pages/homePage/Card1";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Card1 />
      </Container>
    </div>
  );
}

export default App;
