import React, { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i offer</span>
      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <FaGlobe />
            <h3 className="services_title">
              Web <br /> Designer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            ViewMore{" "}
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title"></h3>
              <p className="services_modal-description">
                working more than 5 projects
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop the user interface
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Develop the API</p>
                </li>
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Develop the backend</p>
                </li>
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop the state management
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <AiFillAppstore />
            <h3 className="services_title">
              Mobile App <br /> Designer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            ViewMore{" "}
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title"></h3>
              <p className="services_modal-description">
                working more than 10 projects
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop the user interface
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Develop the API</p>
                </li>
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Develop the Backend</p>
                </li>
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop the state mangement
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
