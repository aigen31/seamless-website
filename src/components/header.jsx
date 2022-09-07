import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render (){
    return (
      <header className="header-main">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="header-title">Header</h1>

              <ul className="menu-list">
                <li className="menu-item"><Link to="/">Домашняя</Link></li>
                <li className="menu-item"><Link to="/contactus">Связаться с нами</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;