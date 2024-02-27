import React, { useRef } from "react"
import Section from "../Section"
import { ReactSVG } from "react-svg"
import user from "../../images/contactSection/user.svg"
import email from "../../images/contact/email.svg"
import feather from "../../images/contactSection/feather.svg"
import Lottie from "lottie-react"
import animationData from "../../animations/contact-me.json"
export default function Contact() {
  const contactMeAnimationRef = useRef(null)
  return (
    <Section className={"email"} id="contactanos">
      <div className="container">
        <h2>Contactanos</h2>
        <Lottie
          className="animation"
          lottieRef={contactMeAnimationRef}
          animationData={animationData}
          autoplay={true}
          loop={true}
        />
      </div>
      <form action="https://formsubmit.co/ae95caba@gmail.com" method="POST">
        <legend>Aclararemos todas tus dudas.</legend>

        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <ReactSVG src={email} />
        </label>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            required
          />
          <ReactSVG src={user} />
        </label>
        <input
          type="hidden"
          name="_next"
          value="http://localhost:8000/"
        ></input>
        <label htmlFor="message">
          <textarea
            name="message"
            required
            id="message"
            placeholder="Escribe tu mensaje"
          ></textarea>
          <ReactSVG src={feather} />
        </label>
        <button>Enviar</button>
      </form>
    </Section>
  )
}
