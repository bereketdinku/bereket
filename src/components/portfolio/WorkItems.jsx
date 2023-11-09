import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work_card" key={WorkItems.id}>
      <img src={item.img} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <a href="" className="work_button">
        Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
