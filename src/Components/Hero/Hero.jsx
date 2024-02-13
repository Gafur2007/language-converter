import "./Hero.scss";
import React from "react";
import Language from "../Localization/Localization";
export default function Hero({lang}) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero__heading">{Language[lang].main.h1}</h1>
          <p className="hero__text">
          {Language[lang].main.text}
          </p>
        </div>
      </section>
    </>
  );
}
