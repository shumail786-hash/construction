import React from "react";
import Header from "./components/header/Header";
import About from "./containers/about/About";
import Company from "./containers/company/Company";
import Services from "./containers/services/Services";
import FooterService from "./containers/serviceFooter/FooterService";
import Portfolio from "./containers/portfolio/Portfolio";
const App = () => {
  return (
    <div>
      <Header />
      <Company />
      <About />
      <Services />
      <Portfolio />
      <FooterService />
    </div>
  );
};

export default App;
