/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

// portifolio properties i.e. name, title, email, social media links

const siteProps = {
  name: "Austin Maina",
  title: "Frontend Web Developer",
  email: "kuriaaustin125@gmail.com",
  gitHub: "Austinkuria",
  linkedIn: "Austin Maina",
  phone: "0797561978",
  // instagram: "",
  // medium: "",
  // twitter: "",
  // youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
