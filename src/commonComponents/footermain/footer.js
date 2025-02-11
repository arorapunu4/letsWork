import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Row className="main-max-width-container ">
            <Col>
              <Row className="ContentMiddle">
                <Col>
                  <Row>
                    <Col md="5" lg="4" className="left-container">
                      <img
                        src={require("../../assets/images/vcep_logo.png")}
                        className="left"
                        alt="footer page logo"
                      />
                      <Row>
                        <Col>
                          <hr className="Line-footer-logo" />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="copyright">
                            © 2019 Test Charitable Endowment Program
                          </p>
                        </Col>
                      </Row>
                    </Col>

                    <Col md="7" lg="8" className="right-container">
                      <Row>
                        <Col
                          md="4"
                          lg="3"
                          xs="6"
                          className="footer-items mouse "
                        >
                          <p className="tool-tip" tabindex="0" title="About Us">
                            About Us
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                          <p className="tool-tip" tabindex="0" title="Careers">
                            Careers
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                          <p
                            className="tool-tip"
                            tabindex="0"
                            title="Contact Us"
                          >
                            Contact Us
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                          <p
                            className="tool-tip"
                            tabindex="0"
                            title="Giving Matters Blog"
                          >
                            Giving Matters Blog
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                          <p
                            className="tool-tip"
                            tabindex="0"
                            title="User Agreement"
                          >
                            User Agreement
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                        </Col>
                        <Col
                          md="5"
                          lg="4"
                          xs="6"
                          className="footer-items mouse "
                        >
                          <p className="tool-tip" tabindex="0" title="Forms">
                            Forms
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                          <p
                            className="tool-tip"
                            tabindex="0"
                            title="Legal disclosure"
                          >
                            Legal disclosure
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                          <p
                            className="tool-tip"
                            tabindex="0"
                            title="Policies and Guidelines"
                          >
                            Policies and Guidelines
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                          <p className="tool-tip" tabindex="0" title="Sitemap">
                            Sitemap
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                          <p
                            className="tool-tip"
                            tabindex="0"
                            title="Company Policies"
                          >
                            Company Policies
                            <span>
                              <span class="tooltiptext">Coming Soon...</span>
                            </span>
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </footer>
      </>
    );
  }
}

export default Footer;
