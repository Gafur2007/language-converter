import "./Our.scss";
import Ourimg from "../Img/our.jpeg";
import Language from "../Localization/Localization";

export default function Our({ lang }) {
  return (
    <section className="our">
      <div className="container">
        <img src={Ourimg} alt="ourimg" width={445} height={520} />

        <div className="our__info">
          <h2 className="our__title">{Language[lang].our.h2}</h2>
          <p className="our__text">{Language[lang].our.text}</p>
        </div>
      </div>
    </section>
  );
}
