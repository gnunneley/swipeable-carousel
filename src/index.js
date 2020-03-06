import React from "react";
import ReactDOM from "react-dom";
import { Item, AppContainer } from "./components";
import Carousel from "./Carousel";

function App() {
  return (
    <AppContainer>
      <Carousel title="Carousel">
        <Item img="https://unsplash.it/475/205" />
        <Item img="https://unsplash.it/476/205" />
        <Item img="https://unsplash.it/477/205" />
        <Item img="https://unsplash.it/478/205" />
        <Item img="https://unsplash.it/479/205" />
      </Carousel>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
