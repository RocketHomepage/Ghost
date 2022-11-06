import Link from "next/link";
import Image from "next/image";
import Logo from "../Images/logo.png";
import Menu from "../Images/menu.png";

const openSearch = (e) => {
  document.getElementById("myOverlay").style.display = "block";
};
const closeSearch = (e) => {
  document.getElementById("myOverlay").style.display = "none";
};

const header = () => {
  return (
    <>
      <div className="header">
        <div className="head-box logo-box">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="head-box menu-box" id="topnav">
          <div className="menu-box-sub">
            <div className="mobile-logo">
              <a href="#">
                <Image src={Logo} alt="logo" />
              </a>
              <div className="close-btn">
                <span
                  href="javascript:void(0)"
                  className="closebtn"
                  id="closeNav"
                >
                  &times;
                </span>
              </div>
            </div>
            <ul className="droup-main">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ÜBER UNS</a>
              </li>
              <li>
                <a href="#">BEREICH LEISTUNGEN</a>
              </li>
              <li>
                <a href="#">KONTAKT</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="mobile-menu-icon">
            <i className="fal fa-bars"></i>
          </div>
        </div>
        <div className="head-box rmenu-box">
          <div className="rm-side">
            {/* <span className="openBtn" onClick={openSearch}>
              <i className="fa fa-search"></i>
            </span> */}
            <span id="openNav">
              <Image src={Menu} alt="logo" />
            </span>
          </div>
        </div>
        {/* <div id="myOverlay" className="overlay-search">
          <span
            className="closebtn"
            onClick={closeSearch}
            title="Close Overlay"
          >
            ×
          </span>
          <div className="overlay-content">
            <form action="/action_page.php">
              <div className="ser-box">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit" className="search-btn">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
      <div className="menu-overlay">
        <div className="menu-bg-overlay"></div>
        <div id="mySidenav" className="sidenav">
          <div className="close-btn">
            <span
              href="javascript:void(0)"
              className="closebtn"
              id="closeNavbtn"
            >
              &times;
            </span>
          </div>
          <div className="saidbar-main">
            <div className="logo-desc">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="saidbar-address">
              <h3>Adresse</h3>
              <div className="address-desc">
                <p>
                  <i className="fas fa-map-marker-alt"></i>Enigma Writing
                  Berliner Straße 29
                  65439 Flörsheim am Main
                </p>
                <p>
                  <i className="fas fa-envelope-open"></i>writern@domain.com
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i>(+62) 800-567-8990
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;