import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <strong>
          <a className="nav-log" href="#">
            DIVYESHKUMAR
          </a>
        </strong>
        <div className="navbar-list">
          <ul className="navbar-items">
            <li>
              <a href="#" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Pojects
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Education
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
