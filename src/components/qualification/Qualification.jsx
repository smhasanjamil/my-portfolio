import { useState } from "react";
import "./Qualification.css";
import ScrollReveal from "../../animation/ScrollReveal";

const Qualification = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <ScrollReveal>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              onClick={() => toggleTab(1)}
              className={
                ToggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div
              onClick={() => toggleTab(2)}
              className={
                ToggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                ToggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Computer Science and Engineering
                  </h3>
                  <span className="qualification__subtitle">
                    Bachelor of Science
                  </span>
                  <span className="qualification__subtitle">
                    North Western University
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2019 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Higher Secondary School Certificate
                  </h3>
                  <span className="qualification__subtitle">
                    Govt. Sundarban Adarsha College
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2017
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Secondary School Certificate
                  </h3>
                  <span className="qualification__subtitle">
                    Lions School & College
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2015
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                ToggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">20+ Projects</h3>
                  <span className="qualification__subtitle">
                    Programming Hero
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div> */}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Qualification;
