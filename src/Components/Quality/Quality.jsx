import "./Quality.scss";
import Qualityimg from "../Img/quality.jpeg";
import Language from "../Localization/Localization";

export default function Quality({ lang }) {
  return (
    <section className="quality">
      <div className="container">
        <div className="quality__info">
          <h3 className="quality__heading">{Language[lang].quality.h3}</h3>
          <p className="quality__text">{Language[lang].quality.text}
          </p>
        </div>
        <img
          className="quality__img"
          src={Qualityimg}
          alt="img"
          width={445}
          height={474}
        />
      </div>
    </section>
  );
}
