import React from "react";
import "./qualification.css"
export const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button qualifaication_active--flex">
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div className="qualification_button qualifaication_active--flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div className="qualification_content">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Flutter and Nodejs Developer</h3>
                <span className="qualification_subtitle">
                  Roshan Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt">
                  Nov 2023 - Dec 2023 
                  </i>
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
               <div className="qualification_line"></div>

              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Mobile app Developer</h3>
                <span className="qualification_subtitle">
                  Atlas Computer Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt">
                  Dec 2023 - Present
                  </i>
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
               <div className="qualification_line"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Qualification