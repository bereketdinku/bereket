import React from "react";
import Works from "./Works";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Most recent works</span>
      <Works />
    </section>
  );
};

export default Portfolio;
