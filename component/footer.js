import Link from 'next/link'
import Image from "next/image";
import F_logo from "../Images/footer-logo.png";
// import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Link href="https://wa.me/49017659136815?text=" passHref >
         <a target="_blank" rel="noopener noreferrer" className='whatsapp'>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1760_80901)">
            <path d="M85.048 14.532C76.5478 6.02845 65.2468 0.904007 53.2493 0.112931C41.2519 -0.678145 29.3759 2.91806 19.8327 10.2319C10.2895 17.5457 3.72972 28.0786 1.37483 39.8692C-0.980072 51.6599 1.03045 63.9045 7.032 74.323L0 100L26.277 93.11C33.5448 97.0677 41.6884 99.1415 49.964 99.142H49.985C59.7873 99.1411 69.3693 96.2342 77.5198 90.7887C85.6703 85.3431 92.0234 77.6035 95.776 68.548C99.5287 59.4925 100.512 49.5277 98.6029 39.9132C96.6934 30.2987 91.9763 21.4662 85.048 14.532ZM49.985 90.773H49.969C42.591 90.7735 35.3485 88.7903 29 85.031L27.495 84.139L11.9 88.227L16.063 73.027L15.082 71.469C10.2266 63.7319 8.08003 54.6007 8.97978 45.5107C9.87953 36.4208 13.7746 27.8875 20.0526 21.2525C26.3306 14.6175 34.6356 10.2569 43.6619 8.85624C52.6883 7.45559 61.9242 9.09432 69.9177 13.5148C77.9112 17.9353 84.2091 24.8869 87.8212 33.2767C91.4334 41.6666 92.1549 51.0189 89.8726 59.8636C87.5902 68.7082 82.4332 76.5436 75.2124 82.1379C67.9916 87.7323 59.1164 90.7684 49.982 90.769L49.985 90.773Z" fill="#E0E0E0"/>
            <path d="M2.275 97.151L8.986 72.643C3.78708 63.6222 1.70947 53.1382 3.07529 42.8165C4.44111 32.4947 9.17406 22.9119 16.5403 15.5538C23.9066 8.19571 33.4946 3.47337 43.8178 2.11896C54.1411 0.764552 64.6228 2.85375 73.6378 8.06264C82.6528 13.2715 89.6976 21.3091 93.6798 30.9292C97.6619 40.5492 98.3591 51.2144 95.6631 61.271C92.9672 71.3276 87.0287 80.2138 78.7685 86.5519C70.5082 92.8901 60.3877 96.326 49.976 96.327H49.955C42.0594 96.3255 34.2898 94.347 27.355 90.572L2.279 97.147L2.275 97.151Z" fill="url(#paint0_linear_1760_80901)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.736 28.513C36.819 26.474 35.853 26.433 34.981 26.398C34.267 26.367 33.45 26.369 32.635 26.369C32.0145 26.3854 31.4042 26.53 30.8423 26.7936C30.2804 27.0572 29.7791 27.4343 29.37 27.901C27.9856 29.2118 26.8895 30.7967 26.1516 32.5545C25.4136 34.3124 25.05 36.2048 25.084 38.111C25.084 44.135 29.472 49.956 30.084 50.773C30.696 51.59 38.554 64.346 50.998 69.253C61.34 73.331 63.445 72.52 65.69 72.316C67.935 72.112 72.933 69.355 73.954 66.496C74.975 63.637 74.974 61.187 74.668 60.675C74.362 60.163 73.546 59.859 72.321 59.246C71.096 58.633 65.078 55.671 63.955 55.263C62.832 54.855 62.016 54.651 61.2 55.877C60.384 57.103 58.039 59.858 57.324 60.677C56.609 61.496 55.895 61.597 54.671 60.985C51.0617 59.5461 47.7303 57.4901 44.826 54.909C42.1491 52.4351 39.8539 49.5781 38.015 46.431C37.301 45.207 37.938 44.543 38.553 43.931C39.103 43.383 39.777 42.502 40.39 41.787C40.8924 41.1681 41.3042 40.4809 41.613 39.746C41.7761 39.4084 41.8523 39.0354 41.8348 38.6608C41.8174 38.2863 41.7068 37.922 41.513 37.601C41.204 36.988 38.824 30.934 37.736 28.513V28.513Z" fill="white"/>
            <path d="M84.643 14.374C76.2424 5.96229 65.0703 0.891443 53.2081 0.106267C41.346 -0.678909 29.603 2.87513 20.167 10.1062C10.731 17.3373 4.2456 27.7522 1.91921 39.4104C-0.407176 51.0687 1.58409 63.1751 7.522 73.474L0.571 98.861L26.546 92.05C33.7304 95.9624 41.7804 98.0125 49.961 98.013H49.982C59.6725 98.0137 69.1456 95.1411 77.2036 89.7583C85.2615 84.3755 91.5426 76.7244 95.2525 67.7722C98.9624 58.82 99.9345 48.9687 98.0461 39.464C96.1577 29.9594 91.4934 21.228 84.643 14.374V14.374ZM49.982 89.74H49.971C42.6774 89.7407 35.5178 87.7802 29.242 84.064L27.754 83.182L12.336 87.223L16.451 72.195L15.482 70.655C10.6825 63.0064 8.56079 53.9798 9.45051 44.994C10.3402 36.0082 14.1909 27.5729 20.3971 21.014C26.6034 14.4552 34.8133 10.1448 43.7363 8.76048C52.6593 7.37613 61.7893 8.99633 69.6911 13.3664C77.5929 17.7364 83.8185 24.6085 87.389 32.9023C90.9595 41.1961 91.6726 50.4413 89.4162 59.1846C87.1597 67.9278 82.0617 75.6733 74.9235 81.2034C67.7853 86.7335 59.0117 89.7346 49.982 89.735V89.74Z" fill="white"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_1760_80901" x1="49.7758" y1="97.151" x2="49.7758" y2="1.71693" gradientUnits="userSpaceOnUse">
            <stop stop-color="#20B038"/>
            <stop offset="1" stop-color="#60D66A"/>
            </linearGradient>
            <clipPath id="clip0_1760_80901">
            <rect width="99.553" height="100" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </a>
      </Link>
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
                    <Link href="/#HOME">
                      <a>HOME</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#PREISE">
                      <a>PREISE</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#CALCULATOR">
                      <a>KONTAKTFORMULAR</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#LEISTUNGEN">
                      <a>LEISTUNGEN</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#FAQ">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#UEBERUNS">
                      <a>ÜBER UNS</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-box fb-2">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link href="/datenschutzerklarung">DATENSCHUTZERKLÄRUNG</Link>
                  </li>
                  <li>
                    <Link href="/impressum">IMPRESSUM</Link>
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
                    <span className="fbdes-text">08:00 Uhr - 20:00 Uhr</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy-rights-sec">
            <p>Copyright © 2023. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
