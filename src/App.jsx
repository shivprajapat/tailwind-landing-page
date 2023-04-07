import React from "react";
import {
  Hero,
  Navbar,
  Companies,
  Courses,
  Achievement,
  Categories,
  Feedback,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      {/* 
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      <Footer /> */}
    </div>
  );
};

export default App;
