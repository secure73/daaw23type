import React from 'react';

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            {/* our office block*/}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Our Office</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary me-3"></i>123
                Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary me-3"></i>+012 345
                67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary me-3"></i>
                info@example.com
              </p>
              <div className="d-flex pt-3">
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links Block */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Quick Links</h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>

            {/* Businnes Hours Block */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Friday</p>
              <h6 className="text-light">09:00 am - 07:00 pm</h6>
              <p className="mb-1">Saturday</p>
              <h6 className="text-light">09:00 am - 12:00 pm</h6>
              <p className="mb-1">Sunday</p>
              <h6 className="text-light">Closed</h6>
            </div>

            {/* Newsletter Block */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative w-100">
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <a className="fw-medium" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{' '}
              <a className="fw-medium" href="#">
                HTML Codex
              </a>{' '}
              Distributed By{' '}
              <a className="fw-medium" href="#">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
