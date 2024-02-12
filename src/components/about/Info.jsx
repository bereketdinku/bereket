import React from "react";

export const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">Intermediate</span>
      </div>
      <div className="about_box">
        <i class="bx bx-briefcase-alt"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">12 + Projects</span>
      </div>
      <div className="about_box">
        <i class="bx bx-support"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
};
