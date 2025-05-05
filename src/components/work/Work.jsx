import ScrollReveal from "../../animation/ScrollReveal";
import "./Work.css";
import Works from "./Works";

const Work = () => {
  return (
    <ScrollReveal>
      <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>

        <Works />
      </section>
    </ScrollReveal>
  );
};

export default Work;
