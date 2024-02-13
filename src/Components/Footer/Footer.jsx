import "./Footer.scss";
import footlogo from "../Img/footer.png";
import footicon from "../Img/icon.png";
import Language from "../Localization/Localization";

function Footer({ lang }) {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer__div">
            <a href="#">
                <img src={footlogo} alt="img" width={236} height={26}/>
            </a>
            <nav className="nav">
              <li className="item">
                <a className="link" href="#link">
                  {Language[lang].header.nav.userLink1}
                </a>
              </li>

              <li className="item">
                <a className="link" href="#link">
                  {Language[lang].header.nav.userLink2}
                </a>
              </li>

              <li className="item">
                <a className="link" href="#link">
                  {Language[lang].header.nav.userLink3}
                </a>
              </li>
            </nav>
          </div>
          <img src={footicon} alt="img" />
        </div>
      </section>
    </>
  );
}

export default Footer;
