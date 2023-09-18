import React from "react";
import Header from "./components/header/Header";
import Services from "./containers/services/Services";
import About from "./containers/about/About";
const App = () => {
  return (
    <div>
      <Header />
      <Services />
      <About />
    </div>
  );
};

export default App;
