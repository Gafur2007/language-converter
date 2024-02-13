import "./Head.scss";
import Language from "../Localization/Localization";
import our1 from "../Img/our1.png";
import our3 from "../Img/our2.png";
import our2 from "../Img/our3.png";

export default function Head({ lang }) {
  return (
    <section className="head">
      <div className="container">
        <p className="headtext">{Language[lang].head.main}</p>
        <div className="head__flex">
          <div className="head__div">
            <img src={our1} alt="img" />
            <h4 className="head__heading">{Language[lang].head.uk.h4}</h4>
            <p className="head__text">{Language[lang].head.uk.text}
            </p>
          </div>

          <div className="head__div">
            <img src={our3} alt="img" />
            <h4 className="head__heading">{Language[lang].head.cd.h4}</h4>
            <p className="head__text">{Language[lang].head.cd.text}
            </p>
          </div>

          <div className="head__div">
            <img src={our2} alt="img" />
            <h4 className="head__heading">{Language[lang].head.au.h4}</h4>
            <p className="head__text">{Language[lang].head.au.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
