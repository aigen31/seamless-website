import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="menu-list">
                <li className="menu-item"><Link to="/">Домашняя</Link></li>
                <li className="menu-item"><Link to="/contactus">Связаться с нами</Link></li>
              </ul>

              <h1 className="footer-title">Footer</h1>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;