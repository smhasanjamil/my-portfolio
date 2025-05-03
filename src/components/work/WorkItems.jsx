const WorkItems = ({ item }) => {
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
      <div className="work__button-items">
        <a
          href={item.livesite}
          className="work__button"
          target="_blank"
          rel="noreferrer"
        >
          Live Site <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>

        <a
          href={item.github}
          className="work__button"
          target="_blank"
          rel="noreferrer"
        >
          Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
