import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue-grey lighten-5">
      <div className="container text-center text-md-left mt-1">
        <div className="row mt-3 dark-grey-text">
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">
              Cities we covered
            </h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <ul>
                <p>
                  {" "}
                  <li className="list-unstyled">Torronto</li>
                </p>
                <p>
                  <li className="list-unstyled">Montreal</li>
                </p>
                <p>
                  <li className="list-unstyled">Vancouver</li>
                </p>
                <p>
                  <li className="list-unstyled">Ottawa</li>
                </p>
                <p>
                  <li className="list-unstyled">Calgary</li>
                </p>
              </ul>
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <i className="fas fa-home mr-3"></i> Toronto, ON M5V 1J2, Canada
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@peaceofmind.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div className="footer-copyright py-1">
        &copy; {new Date().getFullYear()} Copyright:{" Peace of mind "}
      </div>
    </footer>
  );
};

export default Footer;
