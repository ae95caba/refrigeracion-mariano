import React, { useEffect } from "react"
import Section from "../Section"
import { ReactSVG } from "react-svg"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import achievementsData from "../../data/achievements.json"

export default function Achievements() {
  return (
    <Section className="achievements">
      {achievementsData.map(achievement => (
        <Counter
          value={achievement.value}
          text={achievement.text}
          duration={achievement.duration}
          icon={<ReactSVG src={achievement.image} />}
        />
      ))}
    </Section>
  )
}

function Counter({ value, duration, text, icon }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      console.log("in view")
    }
  }, [inView])
  return (
    <div className="container" ref={ref}>
      {icon}
      <p>
        {inView ? (
          <CountUp end={value} duration={duration} start={0} delay={0.5} />
        ) : (
          <span>0</span>
        )}
        <br />
        {text}
      </p>
    </div>
  )
}
