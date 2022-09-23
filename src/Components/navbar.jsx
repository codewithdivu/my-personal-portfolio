import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <strong>
          <Link className="nav-log" to="#">
            DIVYESHKUMAR
          </Link>
        </strong>
        <div className="navbar-list">
          <ul className="navbar-items">
            <li>
              <Link to="#" className="navbar-link active">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">
                Skills
              </Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">
                Pojects
              </Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">
                Education
              </Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
