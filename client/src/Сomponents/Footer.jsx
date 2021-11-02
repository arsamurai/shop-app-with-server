import React from "react";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import youtube from "../assets/img/youtube.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <Link to="/">
          <div className="footer__logo">
            <h1 className="footer__logo-title">svobodna</h1>
            <p className="footer__logo-text">
              самая модная одежда во вселенной
            </p>
          </div>
        </Link>
        <ul className="social">
          <li className="social__link">
            <img className="social__link-img" src={facebook} alt="" />
            <div className="social__link-text">svobodna</div>
          </li>
          <li className="social__link">
            <img className="social__link-img" src={instagram} alt="" />
            <div className="social__link-text">svobodn@</div>
          </li>
          <li className="social__link">
            <img className="social__link-img" src={youtube} alt="" />
            <div className="social__link-text">Svobodna</div>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p className="copy">© 2021 SVOBODNA | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
