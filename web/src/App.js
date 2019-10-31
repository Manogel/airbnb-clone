import React from "react";
import logo from "./assets/logo.svg";
import { Container, Content } from "./styles";
import Routes from "./routes";

function App() {
  return (
    <Container>
      <img src={logo} alt="Airbnb" />
      <Content>
        <Routes />
      </Content>
    </Container>
  );
}

export default App;
