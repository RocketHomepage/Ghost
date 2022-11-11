import Link from "next/link";
import jquery from "jquery";
import emailjs from "emailjs-com";
import { useState } from "react";
import Select from "react-select";
import Image from "next/image";
import Slider_home from "../component/home_slider";
import Right_1 from "../Images/right-1.jpg";
import pp_img from "../Images/pp-img.jpg";
import we_1 from "../Images/we-1.jpg";
import { useEffect } from "react";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const Home = () => {
  useEffect(() => {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {},
      scrollContainer: null, // optional scroll container selector, otherwise use window
    });
    wow.init();
  }, []);

  const [submitted, setSubmitted] = useState(false);

  //for first form

  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  const [value3, setvalue3] = useState("");
  const [value4, setvalue4] = useState("");
  const [value5, setvalue5] = useState("");
  const [value6, setvalue6] = useState("");

  //for second form

  const [form1, setform1] = useState("");
  const [form2, setform2] = useState("");
  const [form3, setform3] = useState("");
  const [form4, setform4] = useState("");
  const [form5, setform5] = useState("");
  const [form6, setform6] = useState("");

  const options = [
    { labe: "35", label: "Hausarbeit / Seminararbeit", value: " Hausarbeit / Seminararbeit" },
    {
      labe: "39",
      label: "Bachelorthesis",
      value: "Bachelorthesis",
    },
    { labe: "45", label: "Masterthesis", value: "Masterthesis" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bcb10q9",
        "template_8m4atcm",
        e.target,
        "nJxbbTsMnv1EXk2dr"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const Userdata = async (event) => {
    event.preventDefault();
    console.log("Sending", Userdata);
    setSubmitted(true);

    let userdata = {
      Name: event.target.Name.value,
      Email: event.target.Email.value,
      Message: event.target.Message.value,
    };

    const res = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });
  };

  return (
    <>
      <section className="writern-sec-1" id="HOME">
        <div className="overlay"></div>
        <div className="wp-pro-sec">
          <div className="flex m-0">
            <div className="we-left-text">
              <div className="main-left-box">
                <h2
                  className={"wow animate__fadeInUp"}
                  data-wow-delay="0.2s"
                  data-wow-duration="2s"
                >
                  Ghostwriting erfordert Vertrauen.
                </h2>
                <p
                  className="wow animate__fadeInUp"
                  data-wow-delay=".2s"
                  data-wow-duration="2s"
                >
                  Stellen Sie uns auf die Probe und nutzen Sie unsere
                  kostenlosen und unverbindlichen Beratungsmöglichkeiten per
                  Telefon oder E-Mail{" "}
                </p>
                <div className="btn-we">
                  <a
                    href="#"
                    className="get-btn btn-primary wow animate__fadeInUp"
                    data-wow-delay=".3s"
                    data-wow-duration="2s"
                  >
                    Preise
                  </a>
                  <a
                    href="#"
                    className="len-btn wow animate__fadeInUp"
                    data-wow-delay=".5s"
                    data-wow-duration="2s"
                  >
                    Kontakt <i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="we-right-text">
              <Image src={Right_1} alt="logo"></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-sec">
        <div className="container">
          <div className="flex">
            <div className="pricing-left">
              <div className="pl-text">
                <div className="img-pl">
                  <Image src={pp_img} alt="pp-img"></Image>
                </div>
                <div className="slider-pl">
                  <div className="testimonial-box wow animate__fadeInUp">
                    <Slider_home />
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-right">
              <div
                className="get-box wow animate__fadeInUp"
                data-wow-delay="0s"
                data-wow-duration="2s"
              >
                <h3>Preisrechner</h3>
                <form onSubmit={sendEmail}>
                  <div className="input-box">
                    <label>Thema</label>
                    <Select
                      id="typeitem"
                      type="string"
                      options={options}
                      name="Category"
                      onChange={(e) => {
                        setvalue6(e.labe);
                        setvalue1(e.value);
                      }}
                      placeholder="Bitte wählen"
                    />
                  </div>
                  <div className="input-box">
                    <label>Anzahl Seiten</label>
                    <input
                      type="number"
                      name="AnzahlSeiten"
                      id="counts"
                      placeholder="Seitenzahl insgesamt"
                      min="0"
                      onChange={(e) => setvalue2(e.target.value)}
                      value2={value2}
                    />
                  </div>
                  {/* adding input values */}
                  <div className="input-box">
                    <label>Insgesamt</label>
                    <input
                      type="text"
                      name="totals"
                      id="counts"
                      value={value6 * value2 + " Є"}
                      onChange={(e) => console.log(setvalue4(value6 * value2))}
                    />
                  </div>
                  <div className="input-box">
                    <label>Name</label>
                    <input
                      type="string"
                      name="Name"
                      id="counts"
                      onChange={(e) => setvalue3(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <label>E-Mail</label>
                    <input
                      type="string"
                      name="E-Mail"
                      id="counts"
                      value={value5}
                      onChange={(e) => setvalue5(e.target.value)}
                    />
                  </div>

                  <div className="sub-btn">
                    {/* <button
                      className="btn-primary"
                      id="calculate"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault(),
                          console.log(
                            value6,
                            value1,
                            value2,
                            value3,
                            value4,
                            value5
                          );
                      }}
                    >
                      Berechnen
                    </button> */}
                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn-primary ml-5"
                      id="calculate"
                      type="submit"
                    >
                      Senden
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="amazing-sec" id="UEBERUNS">
        <div className="container">
          <div className="flex">
            <div className="we-left full">
              <div
                className="heading-sec wow animate__fadeInUp"
                data-wow-duration="2s"
              >
                <h2>
                  <span>ÜBER UNS</span>
                </h2>
                <p>
                  Bei der Vielzahl der Webseiten zum Thema Ghostwriting
                  empfinden viele Kunden die Suche nach der richtigen Agentur
                  oftmals sehr frustrierend. Daher zeige ich Ihnen nun ein paar
                  Vorteile, die ich Ihnen bieten kann:
                </p>
                <div class="pro-ul">
                  <ul
                    class="wow animate__fadeInUp"
                    data-wow-delay=".0s"
                    data-wow-duration="2.2s"
                  >
                    <li>
                      <span>
                        <i class="fas fa-check-circle"></i>
                      </span>
                      <span class="text-li">
                        Bei uns gibt es keine Massenabfertigung. Wir sind ein
                        kleiner, ausgewählter Autorenkreis, bei dem jeder Autor
                        nach seinem Masterabschluss noch eine Vielzahl weiterer
                        Bachelorarbeiten und Masterarbeiten geschrieben hat.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check-circle"></i>
                      </span>
                      <span class="text-li">
                        Bei uns gibt es keinen Agenturaufschlag, sodass wir
                        Ihnen das Schreiben Ihrer wissenschaftlichen Arbeit in
                        der Regel für einen Preis von ca. 35-45 EUR pro
                        Textseite anbieten können.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check-circle"></i>
                      </span>
                      <span class="text-li">
                        Überarbeitungen (beispielsweise nach Ihrer Rücksprache mit dem
                        Dozenten) sind in unseren Preisen enthalten. Jeder Auftrag
                        wird mit einer Plagiatsprüfung ausgeliefert
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check-circle"></i>
                      </span>
                      <span class="text-li">
                        Ein wichtiges Abgrenzungskriterium zu vielen anderen
                        Agenturen besteht darin, dass bei uns niemals hohe Raten
                        zu zahlen sind. In den seltensten Fällen werden von uns
                        Raten von mehr als 300 EUR* in Rechnung gestellt. Dies
                        gibt Ihnen die Möglichkeit, jederzeit die Kontrolle über
                        den Ablauf zu haben und verringert Ihre finanzielle
                        Belastung.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check-circle"></i>
                      </span>
                      <span class="text-li">
                        Nicht bei jeder Agentur können Sie mit Ihrem Autor telefonieren. Unser Modell sieht vor, dass Sie sich vor, während und auch nach der Bearbeitungszeit direkt mit uns austauschen können.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-check-circle"></i>
                      </span>
                      <span class="text-li">
                        Wir sind eine deutsche Agentur, mit einer festen
                        Anschrift (Eschborn – in der Nähe von Frankfurt) mit
                        einem deutschen Bankkonto. Des Weiteren bieten wir auch PayPal als Zahlungsmethode an.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex aboutcenter">
            <div className="we-left">
              <div
                className="heading-sec wow animate__fadeInUp"
                data-wow-duration="2s"
              >
                <p>
                  Wir freuen uns,
                  wenn Sie uns direkt per Email oder noch besser telefonisch
                  kontaktieren. Ein kurzer gegenseitiger Austausch trägt in
                  aller Regel enorm zur Vertrauensbildung bei. Selbst wenn Sie
                  sich am Ende nicht für uns entscheiden, können wir Ihnen gerne
                  auch ein paar hilfreiche Empfehlungen und Tipps für Ihre
                  wissenschaftliche Arbeit geben.
                </p>
              </div>
            </div>
            <div className="we-right">
              <div className="we-img">
                <Image
                  src={we_1}
                  alt="we-1"
                  class="wow animate__fadeInUp"
                  data-wow-delay="0s"
                  data-wow-duration="2s"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-price-wrapper" id="PREISE">
        <div className="container">
          <div
            className="heading-sec wow animate__fadeInUp"
            data-wow-delay="0s"
            data-wow-duration="2s"
          >
            <h2>
              <span>PREISE</span>
            </h2>
          </div>
          <div className="our-price-flex flex">
            <div
              className="our-price-inner wow animate__fadeInUp"
              data-wow-delay=".1s"
              data-wow-duration="2.1s"
            >
              <div className="price-item">
                <div className="price-desc">
                  <h5>Hausarbeit </h5>
                </div>
                <div className="price-number">
                  <p>Ab € 450*</p>
                </div>
                <div className="price-divider-separator"></div>
                <ul className="price-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <p>Umfang 15 Seiten</p>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <p>Frist: 2 Wochen</p>
                  </li>
                </ul>
                <div className="price-btn">
                  <a href="#" className="len-btn btn-primary">
                    Anfrage <i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="our-price-inner our-price-pro wow animate__fadeInUp"
              data-wow-delay=".0s"
              data-wow-duration="2.2s"
            >
              <div className="price-item">
                <div className="price-desc">
                  <h5>Bachelorarbeit (literaturbasiert) </h5>
                </div>
                <div className="price-number">
                  <p>Ab € 1560*</p>
                </div>
                <div className="price-divider-separator"></div>
                <ul className="price-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <p>Umfang 40 Textseiten</p>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <p>Frist: 6 Wochen</p>
                  </li>
                </ul>
                <div className="price-btn">
                  <a href="#" className="len-btn btn-primary">
                    Anfrage <i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="our-price-inner wow animate__fadeInUp"
              data-wow-delay="0s"
              data-wow-duration="2.4s"
            >
              <div className="price-item">
                <div className="price-desc">
                  <h5>Masterarbeit (inkl. Interview)</h5>
                </div>
                <div className="price-number">
                  <p>Ab € 2250*</p>
                </div>
                <div className="price-divider-separator"></div>
                <ul className="price-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <p>Umfang 50 Textseiten</p>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <p>Frist: 6 Wochen</p>
                  </li>
                </ul>
                <div className="price-btn">
                  <a href="#" className="len-btn btn-primary">
                    Anfrage <i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p
            className="wow animate__fadeInUp"
            data-wow-delay=".1s"
            data-wow-duration="2.1s"
          >
            „Bitte bedenken Sie, dass der Preis erst nach vorheriger Absprache
            vereinbart werden kann. Faktoren wie die Bearbeitungszeit (z.B.
            Expresszuschläge bei sehr kurzfristigen Aufträgen), der Umfang der
            empirischen Arbeit (z.B. statistische Analyse, Erhebung von
            Experteninterviews etc.) oder auch die Erstellung einer Arbeit auf
            Englisch können den Endpreis beeinflussen. Dennoch haben wir im
            Folgenden als Beispiel eine Preisübersicht erstellt, die die
            typischen Kosten für Mustervorlagen für Hausarbeiten, Bachelor- und
            Masterarbeiten veranschaulicht.“
          </p>
          <p
            className="wow animate__fadeInUp"
            data-wow-delay=".1s"
            data-wow-duration="2.1s"
          >
            *Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.</p>
        </div>
      </section>
      <section className="ws-sec" id="LEISTUNGEN">
        <div className="container">
          <div
            className="heading-sec wow animate__fadeInUp"
            data-wow-delay="0s"
            data-wow-duration="2s"
          >
            <h2>
              <span>LEISTUNGEN </span>
            </h2>
          </div>
          <div className="flex">
            <div
              className="ws-box wow animate__fadeInUp"
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <div className="ws-icon">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_135)">
                    <path
                      d="M40.2344 100C39.7461 99.4141 39.1797 98.8672 38.8086 98.2227C37.4805 95.918 36.2109 93.5742 34.9414 91.2109C34.6289 90.6445 34.3359 90.5273 33.7109 90.7031C30.9961 91.5039 28.2813 92.2461 25.5469 93.0273C24.668 93.2812 23.8672 93.2617 23.2227 92.5391C22.5781 91.8164 22.6563 91.0156 23.0078 90.1758C26.3672 82.1875 29.707 74.1797 33.0469 66.1719C33.1836 65.8398 33.3203 65.5078 33.5156 65.0391C32.2266 64.9023 31.0156 64.7461 29.8047 64.6484C25.293 64.3555 22.3047 61.543 21.8164 57.0703C21.5625 54.7656 21.4648 52.4609 21.0742 50.1953C20.8984 49.1016 20.3906 47.9492 19.7461 47.0312C18.418 45.1953 16.875 43.4961 15.4492 41.7383C12.793 38.4766 12.793 34.4727 15.4492 31.1914C16.7188 29.6289 17.9688 28.0273 19.3164 26.543C20.5664 25.1758 21.1523 23.6133 21.2695 21.7773C21.4063 19.707 21.6406 17.6367 21.8555 15.5664C22.2266 11.7578 25.2344 8.75 29.043 8.37891C31.4062 8.14453 33.7695 7.89062 36.1328 7.67578C37.4219 7.55859 38.5156 7.07031 39.4922 6.25C40.5859 5.33203 41.7188 4.43359 42.793 3.51562C44.5508 2.01172 46.3086 0.527344 48.6328 0C49.4727 0 50.332 0 51.1719 0C53.418 0.488281 55.1562 1.79687 56.8359 3.28125C57.8516 4.17969 58.9844 4.96094 59.9805 5.89844C61.3477 7.16797 62.9492 7.67578 64.7656 7.8125C66.9141 7.96875 69.043 8.18359 71.1719 8.41797C74.9219 8.84766 77.7734 11.9922 78.125 15.957C78.3203 18.1836 78.5352 20.4297 78.75 22.6562C78.8672 23.8867 79.3164 24.9609 80.1367 25.918C81.6211 27.6953 83.0859 29.4727 84.5508 31.2695C87.0898 34.4336 87.1094 38.418 84.6094 41.6016C83.5742 42.9102 82.5977 44.2578 81.4258 45.4297C79.375 47.4609 78.5742 49.9023 78.5156 52.7344C78.4766 54.3945 78.2812 56.0547 78.0273 57.6758C77.4023 61.6602 74.5117 64.2773 70.5078 64.6289C69.1797 64.7461 67.8516 64.8828 66.4258 65.0195C66.6016 65.4883 66.7383 65.8789 66.8945 66.25C70.2148 74.1992 73.5352 82.1289 76.8555 90.0781C77.0312 90.5078 77.1875 91.0156 77.168 91.4844C77.1094 92.7539 75.8984 93.457 74.5117 93.0859C71.7969 92.3438 69.0625 91.6016 66.3672 90.7617C65.5859 90.5273 65.2734 90.7227 64.9414 91.3867C63.6914 93.7305 62.4219 96.0742 61.0938 98.3789C60.7422 99.0039 60.1367 99.4727 59.6484 100C59.2578 100 58.8672 100 58.4766 100C57.9883 99.375 57.3633 98.8281 57.0508 98.1445C56.1914 96.3281 55.4688 94.4336 54.6875 92.5781C53.7305 90.2734 52.7539 87.9688 51.7969 85.6445C51.3086 84.4727 51.8359 83.457 52.9102 83.3789C53.8086 83.3203 54.2578 83.8672 54.5703 84.6094C55.8789 87.7539 57.1875 90.8984 58.5156 94.043C58.7109 94.5312 58.9453 95 59.2188 95.6641C60.3906 93.5547 61.4453 91.6211 62.5195 89.707C63.6328 87.6758 64.7266 87.2266 66.9336 87.8516C69.082 88.457 71.2305 89.043 73.5156 89.6875C73.3203 89.1992 73.2031 88.8477 73.0469 88.4961C70.0586 81.3672 67.0898 74.2383 64.1016 67.1094C63.2617 65.1172 62.8125 65 60.9961 66.3477C60.6641 66.6016 60.332 66.875 60.0195 67.1484C58.3008 68.5547 56.582 69.9219 54.9023 71.3672C54.3945 71.8164 53.8867 72.3828 53.6328 72.9883C50.0781 81.3867 46.582 89.8242 43.0078 98.2227C42.7148 98.9062 42.0117 99.4141 41.5039 100.02C41.0156 100 40.625 100 40.2344 100ZM49.8633 69.9609C51.1523 69.9805 52.2461 69.5898 53.1836 68.8281C55 67.3438 56.8164 65.8594 58.6133 64.3555C60.1172 63.1055 61.8164 62.4414 63.7695 62.2852C65.9766 62.1289 68.1836 61.9141 70.3711 61.6602C73.1445 61.3477 74.8438 59.6094 75.1562 56.8359C75.332 55.2148 75.5469 53.5938 75.5859 51.9727C75.6836 48.8867 76.582 46.1914 78.7891 43.9453C79.9805 42.7148 81.0156 41.3086 82.0898 39.9609C83.9648 37.6562 83.9453 35.2344 82.0898 32.9492C80.625 31.1719 79.1602 29.375 77.6758 27.5977C76.5234 26.1914 75.9375 24.5898 75.7812 22.7734C75.5664 20.3711 75.3906 17.9688 75.0586 15.5859C74.7266 13.1445 72.8906 11.5234 70.4492 11.2891C68.3203 11.0938 66.1719 10.8398 64.043 10.6836C61.7969 10.5469 59.8828 9.76562 58.2031 8.28125C56.6406 6.91406 55 5.60547 53.3984 4.29688C51.1914 2.5 48.75 2.5 46.543 4.27734C44.7852 5.72266 43.0273 7.16797 41.2695 8.61328C39.9414 9.72656 38.4375 10.4297 36.6797 10.5859C34.2773 10.8203 31.8945 11.0742 29.4922 11.2891C26.9141 11.543 25.0195 13.3789 24.7852 15.9375C24.5898 18.0664 24.3359 20.2148 24.1797 22.3438C24.0234 24.5703 23.2422 26.4844 21.7578 28.1641C20.3711 29.7266 19.082 31.3672 17.7734 32.9688C15.9375 35.2148 15.957 37.6758 17.7734 39.9023C19.2578 41.7188 20.7617 43.5156 22.2461 45.332C23.2617 46.5625 23.8867 47.9688 24.043 49.5898C24.2773 52.0117 24.5313 54.4336 24.7656 56.875C25 59.375 26.6211 61.1914 29.1016 61.543C30.8594 61.7969 32.6562 62.0117 34.4336 62.0703C37.5195 62.1875 40.1953 63.0859 42.4609 65.2734C43.7109 66.4844 45.1563 67.5195 46.5039 68.6523C47.5391 69.4922 48.6328 70 49.8633 69.9609ZM26.5039 89.6875C28.6914 89.0625 30.7422 88.4766 32.793 87.9102C35.332 87.1875 36.3086 87.5977 37.5781 89.9023C38.6133 91.7773 39.6484 93.6523 40.7813 95.7031C43.9844 88.0664 47.1094 80.5859 50.3125 72.9297C47.3633 73.0469 45.3125 71.6211 43.3594 69.9219C42.0703 68.7891 40.7227 67.6953 39.375 66.6406C38.8477 66.2305 38.2227 65.918 37.6367 65.6055C36.9531 65.2344 36.582 65.4492 36.2695 66.2109C33.1445 73.7305 30 81.25 26.8555 88.7695C26.7383 89.0039 26.6602 89.2773 26.5039 89.6875Z"
                      fill="#3BACB6"
                    />
                    <path
                      d="M73.1054 36.5234C73.0663 50.1953 61.2304 60.918 47.6562 59.5312C35.6054 58.3008 26.3476 47.9492 26.8358 35.8203C27.2069 26.582 31.7382 19.7852 40.0194 15.5469C40.3905 15.3711 40.8983 15.1172 41.1913 15.2539C41.6991 15.4688 42.2655 15.8984 42.4804 16.3672C42.7733 17.0703 42.3046 17.6367 41.6601 18.0469C40.1562 18.9648 38.5741 19.7656 37.2265 20.8398C30.996 25.7617 28.203 34.3359 30.5663 41.9922C33.1054 50.1953 38.7304 55.2148 47.2655 56.4258C60.1171 58.2422 71.0546 47.7539 70.0976 34.8047C69.2772 23.8477 59.3554 15.4102 48.4179 16.3477C48.0663 16.3867 47.6952 16.4063 47.3437 16.4063C46.4257 16.4063 45.7812 15.8984 45.7226 15.0781C45.6444 14.2383 46.2304 13.5742 47.1874 13.457C50.371 13.0664 53.496 13.3398 56.5429 14.2383C66.3866 17.207 73.1249 26.2695 73.1054 36.5234Z"
                      fill="#3BACB6"
                    />
                    <path
                      d="M44.9024 38.1641C45.6641 37.3633 46.25 36.6797 46.8945 36.0547C49.8242 33.1055 52.7539 30.1562 55.7227 27.2266C58.2422 24.7461 62.2461 25.625 63.3203 28.8867C63.8672 30.5664 63.5742 32.1484 62.3438 33.418C57.5977 38.2227 52.8125 43.0273 47.9883 47.7734C46.2109 49.5312 43.5547 49.4531 41.7383 47.6953C39.5313 45.5469 37.3242 43.3594 35.1758 41.1328C33.418 39.3164 33.4766 36.5625 35.2149 34.8047C36.9531 33.0469 39.668 32.9687 41.543 34.707C42.6563 35.7227 43.6719 36.875 44.9024 38.1641ZM44.9219 46.1719C45.4297 45.8398 45.957 45.5859 46.3477 45.1953C50.8399 40.7227 55.332 36.2305 59.8047 31.7578C59.9805 31.582 60.1953 31.3867 60.3125 31.1719C60.7227 30.4883 60.7031 29.7852 60.1172 29.2188C59.5313 28.6523 58.8477 28.5742 58.1641 29.043C57.8906 29.2187 57.6758 29.4727 57.4414 29.707C53.7109 33.4375 50 37.168 46.2695 40.8789C45.2344 41.9141 44.5703 41.9141 43.5352 40.8789C42.2461 39.5898 40.9766 38.3008 39.668 37.0312C38.8867 36.2695 37.9883 36.2305 37.3242 36.8945C36.6797 37.5391 36.6992 38.4766 37.4609 39.2383C39.5117 41.3281 41.582 43.3984 43.6719 45.4492C43.9844 45.7031 44.4336 45.8594 44.9219 46.1719Z"
                      fill="#3BACB6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_135">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h4>Individualität</h4>
              <p>
                Jeder Auftrag beginnt optimalerweise mit einem Telefonat
                zwischen Ihnen und dem Autor. Nur auf diese Weise kann der Autor
                die Arbeit auf Ihre Bedürfnisse und Wünsche zuschneiden. Jede
                unserer Arbeiten stellt ein Unikat dar und besteht sämtliche
                Plagiatsprüfungen.
              </p>
            </div>
            <div
              className="ws-box wow animate__fadeInUp"
              data-wow-delay="0s"
              data-wow-duration="2.2s"
            >
              <div className="ws-icon">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.8906 85.5208C47.5781 84.3229 46.9531 82.9688 45.8073 81.875C41.7187 77.9948 39.9219 73.099 39.5052 67.5781C39.4792 67.2917 39.4531 67.0052 39.4531 66.6927C39.4531 65.5729 40.0521 64.8438 40.9896 64.8177C41.901 64.8177 42.4479 65.4688 42.5781 66.5625C42.8125 68.3333 43.0208 70.1042 43.3854 71.849C43.9323 74.4792 45.2604 76.7708 47.1615 78.6719C49.0104 80.5208 50.4167 82.6302 51.1198 85.1823C51.25 85.6771 51.4583 85.9115 52.0573 85.9115C58.5937 85.8854 65.1562 85.8854 71.6927 85.8854C71.7969 85.8854 71.875 85.8594 72.1094 85.8333C72.0312 83.2552 73.5417 81.3281 74.8698 79.2708C75.3906 78.4375 75.7292 77.3438 75.7552 76.3542C75.8594 72.4479 75.8073 68.5417 75.7812 64.6354C75.7812 63.4896 75.3125 62.8646 74.4531 62.8385C73.6458 62.7865 73.125 63.3333 72.9427 64.4271C72.9167 64.6094 72.9167 64.8177 72.8906 65C72.7604 65.8854 72.1615 66.4323 71.3281 66.4323C70.4948 66.4323 69.8437 65.8594 69.7917 64.974C69.7396 63.9583 69.7656 62.9688 69.7656 61.9531C69.7396 60.625 69.0885 59.8438 67.9948 59.8698C66.901 59.8698 66.25 60.6771 66.224 61.9792C66.224 62.5 66.25 63.0208 66.224 63.5417C66.1719 64.4792 65.5469 65.1302 64.7135 65.1563C63.8542 65.1823 63.151 64.5052 63.125 63.5417C63.099 62.2656 63.125 60.9896 63.099 59.7396C63.099 58.6198 62.474 57.8906 61.5365 57.8646C60.599 57.8385 59.9479 58.5417 59.9219 59.6615C59.8958 60.625 59.9219 61.6146 59.9219 62.6042C59.8958 63.8542 59.2969 64.5052 58.3073 64.4792C57.3437 64.4531 56.8229 63.8021 56.8229 62.5781C56.8229 55.6771 56.8229 48.776 56.8229 41.875C56.8229 41.4583 56.8229 41.0156 56.7448 40.625C56.5625 39.6615 55.7292 39.0365 54.7917 39.0885C53.8281 39.1406 53.099 39.8438 52.9948 40.8073C52.9687 41.1719 52.9687 41.5104 52.9687 41.875C52.9687 50.0781 52.9687 58.2813 52.9687 66.4844C52.9687 68.099 52.6823 69.6615 51.875 71.0938C51.3542 72.0573 50.5208 72.3958 49.7135 71.9792C48.8802 71.5885 48.724 70.7552 49.0625 69.7136C49.4271 68.5417 49.8177 67.3438 49.8177 66.1458C49.8698 57.8385 49.8438 49.5313 49.8698 41.25C49.8698 38.125 52.0833 35.9115 55.026 35.9635C57.5 36.0156 59.5833 37.8646 59.8958 40.3125C59.9479 40.8073 59.974 41.276 59.974 41.7708C59.974 45.7813 59.974 49.7917 59.974 53.776C59.974 54.1406 59.974 54.4792 59.974 54.9479C62.474 54.4271 64.4271 55.1042 65.7552 57.2135C69.4531 56.3281 70.625 56.7969 72.7344 59.8438C73.6719 59.8438 74.5833 59.7135 75.4167 59.8698C77.474 60.2344 78.9844 62.0573 78.9844 64.1667C79.0104 68.4375 79.0104 72.7083 78.9844 76.9531C78.9844 78.4115 78.4635 79.7656 77.6562 80.9635C77.1354 81.7188 76.5625 82.4219 76.1458 83.2292C75.7292 84.0104 75.4948 84.8958 75.1823 85.7292C77.3958 86.3021 77.474 86.4323 77.474 88.5938C77.474 90.1563 77.474 91.7188 77.474 93.2813C77.474 94.5833 76.875 95.3125 75.8854 95.2865C74.9219 95.2604 74.349 94.5573 74.349 93.3073C74.349 91.9271 74.349 90.5208 74.349 89.0885C65.9896 89.0885 57.7344 89.0885 49.349 89.0885C49.349 90.5729 49.349 92.0573 49.349 93.5417C49.349 94.401 48.9844 95 48.1771 95.2344C47.3958 95.4688 46.3542 94.9479 46.3281 94.1146C46.224 91.7969 46.1719 89.4792 46.3542 87.1875C46.25 86.6406 47.2135 86.1719 47.8906 85.5208Z"
                    fill="#3BACB6"
                  />
                  <path
                    d="M42.6823 37.9688C42.4739 36.9531 42.2916 36.0156 42.0833 35.1042C41.7708 33.6979 42.1354 32.5521 43.2812 31.6406C44.375 30.7552 45.4427 29.8698 46.5104 28.9583C47.5 28.125 47.6041 27.4219 46.8489 26.3281C44.1406 22.4479 41.4583 18.5938 38.7239 14.7396C37.8906 13.5417 37.4218 12.2917 37.4739 10.8333C37.526 9.37501 37.4739 7.91667 37.5 6.4323C37.5 5.33855 38.0989 4.66147 39.0364 4.66147C39.9739 4.63542 40.625 5.33855 40.625 6.48438C40.651 7.94272 40.5729 9.42709 40.651 10.8854C40.7031 11.5625 40.8854 12.3177 41.276 12.8646C43.9062 16.6927 46.5885 20.4948 49.2448 24.2969C51.1719 27.0573 50.8333 29.4531 48.2812 31.5625C47.3958 32.2917 46.5364 33.0208 45.651 33.724C45.2344 34.0365 45.0781 34.349 45.2343 34.8698C45.4687 35.6771 45.625 36.5104 45.7552 37.3438C46.0156 38.9583 45.2604 40.4167 43.6979 40.8854C40.625 41.849 37.5521 42.7344 34.4531 43.6458C33.5416 43.9063 32.7083 43.4115 32.4739 42.5521C32.2656 41.7188 32.7343 40.9115 33.6979 40.625C36.3281 39.8177 38.9843 39.0625 41.6406 38.2813C41.9271 38.1771 42.2396 38.099 42.6823 37.9688Z"
                    fill="#3BACB6"
                  />
                  <path
                    d="M29.3229 61.9531C24.0885 61.875 19.2187 60.3125 14.4792 58.2813C13.8542 58.0208 13.2292 57.7344 12.6042 57.4219C11.4844 56.9011 11.0677 56.0938 11.4583 55.2083C11.875 54.2969 12.7083 54.1146 13.8542 54.5573C17.1094 55.7552 20.3385 57.0833 23.6458 58.0469C26.7188 58.9583 29.9219 59.1406 33.099 58.3854C33.4375 58.3073 33.8021 58.2031 34.1146 58.0729C35.8333 57.4479 35.9115 57.3698 35.8854 55.5729C35.8854 54.3229 36.25 53.2031 37.0312 52.2396C37.3698 51.7969 37.6562 51.3281 38.0469 50.9375C39.4271 49.5313 40.026 47.9167 39.8177 45.9115C39.6875 44.7917 40.4427 44.0885 41.3802 44.1146C42.2917 44.1406 42.7865 44.8177 42.9167 45.9115C43.2292 48.5677 42.4479 50.8333 40.5729 52.7604C39.4531 53.9063 38.8021 55.2344 38.9323 56.9531C39.0365 58.2552 38.3333 59.3229 37.1875 60.0261C34.8177 61.5625 32.1354 61.9531 29.3229 61.9531Z"
                    fill="#3BACB6"
                  />
                  <path
                    d="M52.8645 90.3906C53.3854 90.3906 53.9062 90.3386 54.427 90.3906C55.2083 90.4948 55.625 91.0156 55.677 91.7708C55.7291 92.5781 55.3385 93.2552 54.5312 93.3333C53.4114 93.4635 52.2656 93.4635 51.1458 93.3333C50.3385 93.2552 49.9479 92.6042 50 91.7708C50.026 90.9896 50.4687 90.4688 51.25 90.3646C51.7448 90.3385 52.3177 90.3906 52.8645 90.3906Z"
                    fill="#3BACB6"
                  />
                </svg>
              </div>
              <h4>Diskretion</h4>
              <p>
                Diskretion ist eines unserer Kernprinzipien. Wir nennen niemals
                namentliche Referenzen oder geben Kundentexte als Beispieltexte
                heraus. Wir löschen alle Kundendaten und jegliche Korrespondenz
                3 Monate nach Auftragsende unwiderruflich. Jede Anfrage, die
                nicht zu einem Auftrag geführt hat, wird nach einer Woche
                gelöscht.
              </p>
            </div>
            <div
              className="ws-box wow animate__fadeInUp"
              data-wow-delay="0s"
              data-wow-duration="2.4s"
            >
              <div className="ws-icon">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_109)">
                    <path
                      d="M0 44.3229C3.30729 40.1563 6.61458 35.9636 9.94792 31.7969C11.901 29.349 13.8542 26.9271 15.7812 24.4792C16.3802 23.724 17.0833 23.4115 18.0469 23.4115C39.349 23.4375 60.651 23.4375 81.9531 23.4115C82.9688 23.4115 83.6719 23.8021 84.2708 24.5573C89.2708 30.8333 94.2969 37.1094 99.3229 43.3854C99.5573 43.6979 99.7656 44.0104 100 44.3229C100 44.7136 100 45.1042 100 45.4948C99.6875 45.9115 99.401 46.3281 99.0365 46.7188C83.3854 64.0365 67.7344 81.3542 52.0833 98.6458C51.6406 99.1406 51.0938 99.5573 50.599 100C50.2083 100 49.8177 100 49.4271 100C48.9583 99.5833 48.4635 99.2188 48.0729 98.776C34.2188 83.5156 20.3906 68.2292 6.58854 52.9427C4.375 50.4948 2.1875 47.9948 0 45.4948C0 45.1042 0 44.7396 0 44.3229ZM29.5833 46.9011C36.4062 62.3698 43.151 77.6823 50 93.2031C56.875 77.6302 63.6198 62.3177 70.4167 46.9011C56.7448 46.9011 43.2552 46.9011 29.5833 46.9011ZM69.8698 42.9167C69.8177 42.7604 69.7917 42.6563 69.7396 42.5781C66.7969 37.6563 63.8802 32.7604 60.8854 27.8646C60.7031 27.5781 60.1562 27.3698 59.7917 27.3698C53.2812 27.3438 46.7708 27.3698 40.2604 27.3177C39.5833 27.3177 39.2188 27.5521 38.8802 28.125C36.1198 32.7604 33.3333 37.3958 30.5729 42.0313C30.4167 42.2917 30.2604 42.5781 30.0521 42.9427C43.3854 42.9167 56.5885 42.9167 69.8698 42.9167ZM6.35417 46.875C18.6719 60.4948 30.8073 73.9063 42.9427 87.3177C42.9948 87.0573 42.9427 86.875 42.8646 86.6927C37.1094 73.6458 31.3542 60.599 25.625 47.5521C25.3646 46.9531 25.026 46.849 24.4531 46.849C18.75 46.875 13.0729 46.849 7.36979 46.849C7.10937 46.875 6.84896 46.875 6.35417 46.875ZM93.6458 46.875C93.0729 46.875 92.7344 46.875 92.4219 46.875C86.901 46.875 81.3542 46.901 75.8333 46.849C75 46.849 74.5833 47.0573 74.2448 47.8386C69.5573 58.5156 64.8438 69.1927 60.1562 79.8698C59.0625 82.3177 57.9948 84.7917 56.901 87.2396C56.9531 87.2656 57.0052 87.2917 57.0573 87.3438C69.1927 73.9063 81.3281 60.4948 93.6458 46.875ZM34.8177 27.3438C29.401 27.3438 24.2188 27.3438 19.0104 27.3698C18.6719 27.3698 18.2552 27.6823 18.0208 27.9948C15.2604 31.4063 12.526 34.8438 9.76562 38.2813C8.56771 39.7917 7.34375 41.3021 6.04167 42.9427C6.32812 42.9688 6.43229 42.9948 6.5625 42.9948C12.6562 42.9948 18.724 43.0208 24.8177 42.9688C25.1562 42.9688 25.625 42.6302 25.8333 42.3177C27.6302 39.4011 29.375 36.4844 31.1198 33.5417C32.3177 31.5104 33.5417 29.5052 34.8177 27.3438ZM93.9844 42.9688C89.8177 37.7604 85.8333 32.7604 81.7969 27.7865C81.5885 27.5261 81.0937 27.3698 80.7031 27.3698C75.8333 27.3438 70.9375 27.3438 66.0677 27.3438C65.8333 27.3438 65.5729 27.3438 65.2083 27.3438C65.3125 27.5781 65.3646 27.7083 65.4427 27.8125C68.3594 32.6823 71.276 37.5781 74.2448 42.4219C74.4271 42.7344 75.026 42.9427 75.4167 42.9427C81.1719 42.9688 86.9271 42.9688 92.6823 42.9688C93.0469 42.9688 93.4115 42.9688 93.9844 42.9688Z"
                      fill="#3BACB6"
                    />
                    <path
                      d="M50.573 0C51.6146 0.572917 51.9792 1.45833 51.9532 2.65625C51.9011 6.22396 51.9271 9.79167 51.9271 13.3594C51.9271 14.5833 51.3282 15.3906 50.3125 15.599C49.1927 15.8073 48.0469 14.974 48.0469 13.75C47.9948 9.79167 48.0209 5.83333 48.0469 1.875C48.0469 0.9375 48.724 0.46875 49.4011 0C49.7917 0 50.2084 0 50.573 0Z"
                      fill="#3BACB6"
                    />
                    <path
                      d="M30.3645 3.64581C31.0416 4.03644 31.5885 4.24477 31.9531 4.60935C34.5052 7.10936 37.0312 9.6354 39.5312 12.1875C40.4427 13.0989 40.4427 14.2448 39.6354 15.0521C38.8281 15.8594 37.6823 15.8333 36.7708 14.9219C34.2187 12.4219 31.7187 9.86977 29.1927 7.34373C28.5416 6.69269 28.2031 5.85935 28.75 5.05206C29.1145 4.50519 29.7916 4.1406 30.3645 3.64581Z"
                      fill="#3BACB6"
                    />
                    <path
                      d="M71.5105 6.09376C71.3802 6.35417 71.25 6.87501 70.9375 7.18751C68.3334 9.84376 65.7292 12.4479 63.099 15.0521C62.2657 15.8594 61.1459 15.8073 60.3907 15.0521C59.6355 14.2969 59.5313 13.151 60.3386 12.3438C62.9427 9.68751 65.599 7.03126 68.2552 4.42709C68.8282 3.85417 69.5834 3.75001 70.3386 4.11459C71.0677 4.45313 71.4323 5.05209 71.5105 6.09376Z"
                      fill="#3BACB6"
                    />
                    <path
                      d="M46.6927 54.6875C44.375 54.6875 42.0833 54.6875 39.7656 54.6875C38.3333 54.6875 37.4739 53.9323 37.5 52.7083C37.526 51.5365 38.3593 50.7812 39.7135 50.7812C44.3229 50.7812 48.9583 50.7812 53.5677 50.7812C54.9739 50.7812 55.8593 51.5625 55.8593 52.7604C55.8333 53.9323 54.9479 54.6875 53.5156 54.6875C51.2239 54.6875 48.9583 54.6875 46.6927 54.6875Z"
                      fill="#3BACB6"
                    />
                    <path
                      d="M63.6719 52.7344C63.6719 53.8021 62.7344 54.7135 61.6667 54.6875C60.625 54.6615 59.7656 53.776 59.7656 52.7344C59.7656 51.6667 60.6771 50.7552 61.7708 50.7812C62.8125 50.8073 63.6719 51.6927 63.6719 52.7344Z"
                      fill="#3BACB6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_109">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h4>Qualität</h4>
              <p>
                Wir legen größten Wert auf zufriedene Kunden und demzufolge auf
                die hohe Qualität unserer wissenschaftlichen Dienstleistungen.
                Unsere Autoren sind ausschließlich erfahrene Akademiker, die wir
                sehr sorgfältig auswählen. Unsere Ghostwriter sind nicht nur
                bestens vertraut mit den gängigen wissenschaftlichen
                Anforderungen, sondern auch Experten in ihrem jeweiligen
                Fachgebiet. Sollte doch einmal eine Beanstandung bestehen,
                korrigieren und überarbeiten wir nach begründeter Kritik
                natürlich kostenlos.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <div
        className="get-box wow animate__fadeInUp"
        data-wow-delay="0s"
        data-wow-duration="2s"
      >
        <h3>Contect from</h3>
        <form onSubmit={sendEmail}>
          <div className="input-box">
            <label> Full Name </label>
            <input
              type="string"
              name="AnzahlSeiten"
              id="counts"
              onChange={(e) => setform1(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Username</label>
            <input
              type="string"
              name="totals"
              id="counts"
              onChange={(e) => setform2(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Age </label>
            <input
              type="string"
              name="name"
              id="counts"
              onChange={(e) => setform3(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="string"
              name="Email"
              id="counts"
              onChange={(e) => setform4(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <input
              style={{ marginLeft: "10px" }}
              type="checkbox"
              onChange={(e) => setform5(e.target.value)}
            />
            <label>Femle</label>
          </div>

          <input
            style={{ marginLeft: "10px" }}
            type="checkbox"
            value={value5}
            onChange={(e) => setform6(e.target.value)}
          />
          <label>male</label>

          <div className="sub-btn">
            <button
              className="btn-primary"
              id="calculate"
              type="submit"
              onClick={(e) => {
                e.preventDefault(),
                  console.log(
                    "name:",
                    form1,
                    "username",
                    form2,
                    "age",
                    form3,
                    "Email",
                    form4,
                    form5,
                    f
                  );
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default Home;
