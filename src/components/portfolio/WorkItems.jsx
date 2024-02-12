import React,{useState} from "react";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="work_card" key={WorkItems.id}>
      <img src={item.img} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <span href="" className="work_button" onClick={() => toggleTab(1)}>
        View more <i className="bx bx-right-arrow-alt work_button-icon"></i>
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
              
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    {item.desc}
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="ui uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">{item.tech}</p>
                </li>
               
              </ul>
            </div>
          </div>
    </div>
  );
};

export default WorkItems;
