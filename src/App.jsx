import React from "react";
import Header from "./components/header/Header";
import About from "./containers/about/About";
import Company from "./containers/company/Company";
import Services from "./containers/services/Services";
const App = () => {
  return (
    <div>
      <Header />
      <Company />
      <About />
      <Services />
    </div>
  );
};

export default App;
