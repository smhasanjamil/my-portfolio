import { useState } from "react";

const WorkItems = ({ item }) => {
  console.log("Items===>>>", item);
  const [ToggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    // <div className="work__card">
    //     <img src={item.image} alt="" className="work__img" />
    //     <h3 className="work__title">{item.title}</h3>
    //     <a href="#" className="work__button">
    //         Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
    //     </a>
    // </div>

    <div className="work__card">
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__technologies">
        {item.technology?.map((tech, index) => (
          <span key={index} className="work__tech">
            {tech}
          </span>
        ))}
      </div>
      <p className="work__description">{item.description}</p>
      <div className="work__button-items">
        {/* Modal start */}
        <span className="services__button" onClick={() => toggleTab(1)}>
          View Details
          <i className="uil uil-arrow-right services__button-icon"></i>
        </span>

        <div
          className={
            ToggleState === 1
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times services__modal-close"
            ></i>

            <img src={item.image} alt="" className="modal__img" />

            <h3 className="services__modal-title">{item.title}</h3>
            <p>{item.description}</p>

            <div className="work__button-items">
              <a
                href={item.livesite}
                className="work__button"
                target="_blank"
                rel="noreferrer"
              >
                Live Site{" "}
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
              </a>

              <a
                href={item.github}
                className="work__button"
                target="_blank"
                rel="noreferrer"
              >
                Github{" "}
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Modal end */}
      </div>
    </div>
  );
};

export default WorkItems;
