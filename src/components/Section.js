import React from "react"

export default function Section({
  className,
  children,
  id,
  enableBackgroundDiv,
}) {
  return (
    <section className={className} id={id}>
      {enableBackgroundDiv && <div className="background"></div>}
      <div className="content">{children}</div>
    </section>
  )
}
