import ScrollReveal from "../../animation/ScrollReveal";
import Data from "./Data";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const Home = () => {
  return (
    <div>
      <ScrollReveal>
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <Social />

              <div className="home__img"></div>

              <Data />
            </div>

            <ScrollDown />
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;
