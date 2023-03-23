import Link from 'next/link'
import Image from "next/image";
import Logo from "../Images/logo.png";
import Menu from "../Images/menu.png";
import React, { useEffect } from "react";
import Script from 'next/script'
import ChatBot4You from "./ChatBot4You.js";

const openSearch = (e) => {
  document.getElementById("myOverlay").style.display = "block";
};
const closeSearch = (e) => {
  document.getElementById("myOverlay").style.display = "none";
};

const header = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});
      
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header');
            const scrollTop = window.scrollY;
            scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };
  return (
    <>
      <div className="header">
        
        <Link href="/" className="head-box logo-box">
          <a>
            <Image src={Logo} alt="logo" />
          </a>
        </Link>
        <div className="head-box menu-box" id="topnav">
          <div className="menu-box-sub">
            <div className="mobile-logo">
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
                <Link href="/#LEISTUNGEN">
                  <a>LEISTUNGEN</a>
                </Link>
              </li>
              <li>
                <Link href="/#CALCULATOR">
                  <a>RECHNER</a>
                </Link>
              </li>
              <li>
                <Link href="/#UEBERUNS">
                  <a>ÜBER UNS</a>
                </Link>
              </li>
              <li>
                <Link href="/#FAQ">
                  <a>FAQ</a>
                </Link>
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
                  <i className="fas fa-map-marker-alt"></i>Enigma Writing <br></br>
                    Alexander Wagner <br></br>
                    Mergenthalerallee 73-75 <br></br>
                    65760 Eschborn
                </p>
                <p>
                  <i className="fas fa-envelope-open"></i>info@enigma-writing.de
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i> +49 (0)176 5913 6815
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBot4You></ChatBot4You>
    </>
  );
};

export default header;
