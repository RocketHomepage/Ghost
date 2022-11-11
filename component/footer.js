import Link from 'next/link'
import Image from "next/image";
import F_logo from "../Images/footer-logo.png";
// import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="main-footer">
        <div className="container">
          {/* <div className="paget-box">
                <div className="flex">
                    <div className="bs-left">
                        <div className="heading-sec wow animate__fadeInLeft" data-wow-delay="0s" data-wow-duration="2.2s">
                            <h2>Subscribe Our<span> Newsletter</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </div>
                    <div className="bs-right">
                        <div className="bs-news wow animate__fadeInRight" data-wow-duration="2.5s">
                            <div className="news-input">
                                <input type="text" placeholder="Enter your Email" />
                            </div>
                            <div className="news-btn">
                                <a href="#" className="len-btn btn-primary"><i className="fas fa-paper-plane"></i> Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
          <div className="footer-sec">
            <div className="flex">
              <div className="footer-box fb-1">
                <div className="footer-logo">
                  <Image src={F_logo} alt="F_logo" />
                </div>
                <p>
                  Passion in Wort & Schrift
                </p>
              </div>
              <div className="footer-box fb-2">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link href="#HOME">
                      <a>HOME</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#UBERUNS">
                      <a>ÜBER UNS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#PREISE">
                      <a>PREISE</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#LEISTUNGEN">
                      <a>LEISTUNGEN</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#KONTAKT">
                      <a>KONTAKT</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-box fb-2">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="/datenschutzerklarung">DATENSCHUTZERKLÄRUNG</a>
                  </li>
                  <li>
                    <a href="/imprint">IMPRESSUM</a>
                  </li>
                </ul>
              </div>
              <div className="footer-box fb-2">
                <h4>Get In Touch</h4>
                <ul>
                  <li>
                    <span className="fb-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span className="fbdes-text">
                      Enigma Writing <br></br>
                      Alexander Wagner <br></br>
                      Mergenthalerallee 73-75 <br></br>
                      65760 Eschborn
                    </span>
                  </li>
                  <li>
                    <span className="fb-icon">
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    <span className="fbdes-text">+49 (0)176 5913 6815</span>
                  </li>
                  <li>
                    <span className="fb-icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="fbdes-text">info@enigma-writing.de</span>
                  </li>
                  <li>
                    <span className="fb-icon">
                      <i className="fas fa-clock"></i>
                    </span>
                    <span className="fbdes-text">07.00 AM - 19.00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy-rights-sec">
            <p>Copyright © 2022. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
