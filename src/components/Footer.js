import React from "react"
import phone from "../images/phone.svg"
import pin from "../images/pin.svg"
import email from "../images/email.svg"
import { ReactSVG } from "react-svg"
import linkedin from "../images/social/linkedin.svg"
import twitter from "../images/social/twitter.svg"
import instagram from "../images/social/instagram.svg"
import facebook from "../images/social/facebook.svg"
import whatsapp from "../images/social/whatsapp.svg"
import Logo from "../images/GatsbyImages/Logo"
import Tabs from "./Tabs"
const social = {
  instagram: { url: "https://www.instagram.com/", icon: instagram },
  facebook: { url: "https://www.facebook.com/", icon: facebook },
  linkedin: { url: "https://www.linkedin.com/", icon: linkedin },
  twitter: { url: "https://www.twitter.com/", icon: twitter },
}

const contact = {
  whatsapp: { icon: whatsapp, string: "+5491265800", url: "fasdfas" },
  phone: { icon: phone, string: "+54911291855", url: "tel:+54911291855" },
  location: {
    icon: pin,
    string: "Gallo 2145, Ciudad de Buenos Aires, Argentina",
    url: "https://www.google.com/maps",
  },
  email: {
    icon: email,
    string: "jmyasociados@gmail.com",
    url: "mailto:jmyasociados@gmail.com",
  },
}

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="container first">
          {Object.keys(contact).length > 0 && (
            <div className="contact">
              {Object.keys(contact).map(plataform => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={contact[plataform].url}
                >
                  <ReactSVG src={contact[plataform].icon} />
                  {contact[plataform].string}
                </a>
              ))}
            </div>
          )}
          <div className="extra">
            <Logo />
            <nav>
              <Tabs />
            </nav>
          </div>
        </div>
        {Object.keys(social).length > 0 && (
          <div className="container second">
            <h2>Siguenos en las redes para ver mas</h2>
            <div className="social">
              {Object.keys(social).map(plataform => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social[plataform].url}
                >
                  <ReactSVG src={social[plataform].icon} />
                </a>
              ))}
            </div>
          </div>
        )}

        <p className="copyright">
          Copyright © 2023 | REFRIGERACION MARIANO por
          <a href="https://andreespinozadev.netlify.app/"> Andre Espinoza</a>
        </p>
      </div>
    </footer>
  )
}
