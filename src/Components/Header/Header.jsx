import "./Header.scss";
import React from "react";
import Logo from "../Img/cofe-logo.png";
import Language from "../Localization/Localization";

export default function Header({ lang, setLang }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__link">
            <a href="#" className="logo__link">
              <img src={Logo} alt="logo" width={236} height={26} />
            </a>
            <select
              className="select"
              value={lang}
              onChange={(evt) => setLang(evt.target.value)}
            >
              <option value="ar">AR</option>
              <option value="en">EN</option>
              <option value="ir">IR</option>
              <option value="kh">KH</option>
              <option value="ru">RU</option>
            </select>
          </div>

          <nav className="nav">
            <li className="item">
              <a className="link" href="#link">
                {Language[lang].header.nav.userLink1}
              </a>
            </li>

            <li className="item">
              <a className="link" href="#">
                {Language[lang].header.nav.userLink2}
              </a>
            </li>

            <li className="item">
              <a className="link" href="#">
                {Language[lang].header.nav.userLink3}
              </a>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
}
